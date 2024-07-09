import React, { useRef, useEffect, useState } from 'react';
import './App.css'
import { Editor } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import { marked } from 'marked';
import files from './assets/plantillas.json';
import snippets_basales from './components/snippets_basales';
// files as js object


function SeleccionPlantillas(setSelectedFile) {
  const [path, setPath] = useState(''); // State to store the selected file path

  async function fetchMd(uri) {
    const response = await fetch(uri);
    const text = await response.text();
    setSelectedFile(text); // Update selected file content using the callback
  }

  const selectionStyle = {
    width: '400px',
    height: '30px',
    fontSize: '16px',
    margin: '5px',
  };

  return (
    <div style={{ height: '40px', padding: '0px', margin: '0px' }}>
      <select
        style={selectionStyle}
        name="seleccion_plantilla"
        defaultValue="Selecciona una plantilla"
        onChange={(e) => {
          const selectedValue = e.target.value;
          setPath(`./plantillas/${selectedValue}`); // Update path based on selection
          fetchMd(path); // Fetch content based on updated path
        }}
      >
        <option value="Selecciona una plantilla" disabled>
          Selecciona una plantilla
        </option>
        {Object.keys(files).map((file) => (
          <option key={file} value={files[file]}>
            {files[file]}
          </option>
        ))}
      </select>
    </div>
  );
}

function App() {
 
  const [contenido, setContenido] = useState('');
  const [md, setMd] = useState('');
  const [snippets, setSnippets] = useState({});
  

  useEffect(() => {
    // Fetch snippets on mount
    const fetchSnippets = async () => {
      try {
        const data = await loadGoogleSheet();
        setSnippets(data);
        console.log('snippets loaded');
      } catch (error) {
        console.error('Error loading Google Sheet:', error);
      }
    };

    fetchSnippets();
  }, []);

  useEffect(() => {
    // Update snippets when snippetsBasales changes
    setSnippets(prevSnippets => ({ ...prevSnippets, ...snippets_basales }));
  }, [snippets_basales]);

  useEffect(() => {
    // Register completion items when snippets change
    if (monaco) {
      monaco.languages.registerCompletionItemProvider('markdown', {
        provideCompletionItems: (model, position) => {
          const suggestions = [];
          for (const [key, value] of Object.entries(snippets)) {
            suggestions.push({
              label: key,
              kind: value.kind,
              insertText: value.insertText,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              detail: value.detail,
              documentation: value.description,
            });
          }
          return { suggestions };
        },
      });
    }
  }, [snippets]);
  // when seleccion plantilla changes, update md

 // Empty array means this effect runs once on mount



  
  const myTheme = {
    base: 'vs-dark',
    inherit: true,
    rules: [{ background: '#000000', token: ''}],
    colors: {
      'editor.background': '#251E07',
      'editor.foreground': '#F7F4E0',
      'editorLineNumber.foreground': '#F7F4E0',
      'editorLineNumber.activeForeground': '#FCA0A0',
      'editorCursor.foreground': '#B6FE70',
      'editor.selectionBackground': '#4E4EFA',
      'editor.inactiveSelectionBackground': '#7B7BFE',
      'editor.selectionHighlightBackground': '#646465',
      'editor.findMatchBackground': '#4E4EFA',
      'editor.findMatchHighlightBackground': '#BBBEFF',
      'editor.findRangeHighlightBackground': '#646465',
      'editor.hoverHighlightBackground': '#847358',
      'editor.lineHighlightBackground': '#494A24',
      'editor.rangeHighlightBackground': '#608B8D',
      'editorWhitespace.foreground': '#646465',
      
    


  }
  };


  const handleEditorChange = (value, event) => {
    setContenido(marked(value)); // convert markdown to HTML and update state
    // 
  };
  const onMount = (editor, monaco ) => {

    monaco.editor.defineTheme('myTheme', myTheme);
    monaco.editor.setTheme('myTheme'); 
    editor.focus();
    setContenido(marked(editor.getValue())); // convert markdown to HTML and update state
    
    

    /* registerSnippets();
    console.log("snippet is registered");
    console.log(monaco.languages.getLanguages()); */
    
  };
  



  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}}>

      <SeleccionPlantillas/>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', 
        width: '100vw', height: 'auto', padding: '0px', margin: '0px'
      }}>
        <Editor
          height='calc(100vh - 40px)'
          padding='0px'
          margin='0px'
          width="50vw"
          theme='vs-dark'
          defaultLanguage='markdown'
          onMount={onMount}
          onChange={handleEditorChange}
          value={md}
          options={{
            wordWrap: 'on',
            
          }}
        />
        {/* Preview of Editor markdown */}
          <div style={{
            height: 'calc(100vh - 40px)', 
            width: '50vw', 
            backgroundColor: 'white', 
            padding: '0px', 
            overflow: 'auto'}}>
            <div dangerouslySetInnerHTML={{__html: contenido}}></div>
          </div>
      </div>
    </div>
  );
}



async function loadGoogleSheet(){
  
  let SHEET_ID = '1AjQ6IRZ9fdw13qizrCzGtR3QFeZb6nq2KYms-wJ8Puc';
  let SHEET_TITLE = 'atajos';
  let SHEET_RANGE = 'A1:C100'
  let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);
  console.log('hola desde el loadGoogleSheet');
  fetch(FULL_URL)
  .then(res => res.text())
  .then(rep => {
      let data = JSON.parse(rep.substr(47).slice(0,-2));
      let snippets_sheets = data.table.rows;
      console.log(snippets_sheets);
      

      // fix snippets object to have the form:
      // 'nombre_first google sheets col': {
      //   kind: monaco.languages.CompletionItemKind.Snippet,
      //   insertText: 'texto_second google sheets col',
      //   detail: 'detalle_third google sheets col',
      //  },

      let snippets_sheets_def = {};

      for (let i = 1; i < snippets_sheets.length; i++) {
        const element = snippets_sheets[i].c;
        const nombre = element[0].v;
        const texto = element[1].v;
        const detalle = element[2].v;
        snippets_sheets_def[nombre] = {
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: texto,
          detail: detalle,
        }
      }
      console.log(snippets_sheets_def);
      return snippets_sheets_def;
    }).catch (error => console.error('Error fetching Google Sheet:', error));
      
}


export default App;