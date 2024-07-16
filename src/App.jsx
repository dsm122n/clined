import React, { useRef, useEffect, useState } from 'react';
import './App.css'
import { Editor } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import 'monaco-editor/esm/vs/editor/editor.all.js';
import { marked, use } from 'marked';
import files from './assets/plantillas.json';
import snippets_basales from './components/snippets_basales';

function SeleccionPlantillas({ setSelectedFile }) {
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
    margin: '10px',
  };

  return (
    <div style={{ height: '40px', padding: '0px', margin: '0px' }}>
      <select
        style={selectionStyle}
        name="seleccion_plantilla"
        defaultValue="Selecciona una plantilla"
        onChange={(e) => {
          const selectedValue = e.target.value;
          const newPath = `./plantillas/${selectedValue}`; // Update path based on selection
          setPath(newPath);
          fetchMd(newPath); // Fetch content based on updated path
          // update content of right editor


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
let snippetsGlobal = {};
function Autocompletado({snippetsPrev, actualizarState, monacoEditor}){
  const autocompletadoRef = useRef("https://docs.google.com/spreadsheets/d/1AjQ6IRZ9fdw13qizrCzGtR3QFeZb6nq2KYms-wJ8Puc/edit?gid=0#gid=0");
  const snippetsRef = useRef(snippetsPrev);
  const [snippets, setSnippets] = useState(snippetsPrev);

  const handleClickToUpdate = async () => {
    try {
    const autocompletado_url = document.getElementById('autocompletado-url').value;
    console.log('autocompletado_url', autocompletado_url);

    const snippetsSheetsDef = await updateAutocompletado(autocompletado_url);

    console.log('snippetsSheetsDef', snippetsSheetsDef);
    let snippetsActualizados = {...snippetsPrev, ...snippetsSheetsDef};
    console.log('snippetsActualizados', snippetsActualizados);
    setSnippets(snippetsActualizados);
    snippetsRef.current = snippetsActualizados;
    snippetsGlobal = snippetsActualizados;
    actualizarState(snippetsActualizados);
    try {
      return App().onMount();
      //monaco.languages.registerCompletionItemProvider('markdown', {
  //
      //  // triggerCharacters: ['.'], // Trigger snippet on dot (can be customized)
      //  provideCompletionItems: (model, position) => {
      //    console.log('inside registerCompletionItemProvider');
      //    const suggestions = [];
      //    for (const [key, value] of Object.entries(snippetsActualizados)) {
      //      suggestions.push({
      //        label: key,
      //        kind: value.kind,
      //        insertText: value.insertText,
      //        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      //        detail: value.detail,
      //        documentation: value.description
      //      });
      //      return { suggestions: suggestions };
      //    }
      //    console.log('suggestions', suggestions);
      //  }
     // }
    //);
  } catch (error) {
    console.error('Error loading snippets:', error);
  }
  }
  catch (error) {
    console.error('Error loading snippets:', error);
      
    }
  };
  return(
    <div style={{ height: '40px', padding: '5px', margin: '0px' }}>
      <input style={{
              width: '400px',
              height: '30px',
              fontSize: '16px',
              margin: '0px',
              padding: '0px',
               }} 
              type="url" name="autocompletado" id="autocompletado-url" defaultValue={autocompletadoRef.current} />
      <button style={{
                width: '30px',
                height: '30px',
                fontSize: '16px',
                margin: '5px',
                padding: '0px',
                }} 
                type="button"
                onClick={handleClickToUpdate}
          
                >✨</button>
    </div>
  );
}


async function updateAutocompletado(aurocompletado_url){
  let fullString = aurocompletado_url;
  const conector = '/gviz/tq?sheet=';
  let SHEET_TITLE = 'atajos';
  const conector2 = '&range=';
  let SHEET_RANGE = 'A1:C200';

  let [url, params] = fullString.split('/edit?');

  let FULL_URL = (url + conector + SHEET_TITLE + conector2 + SHEET_RANGE);
  console.log('FULL_URL', FULL_URL);

  console.log('hola desde el updateAutocompletado');
  
  try {
    const res = await fetch(FULL_URL);
    const rep = await res.text();
    const data = JSON.parse(rep.substr(47).slice(0, -2));
    const snippetsSheets = data.table.rows;
    console.log(snippetsSheets);

    let snippetsSheetsDef = {};

    for (let i = 1; i < snippetsSheets.length; i++) {
      const element = snippetsSheets[i].c;
      const nombre = element[0].v;
      const texto = element[1].v;
      const detalle = element[2].v;
      snippetsSheetsDef[nombre] = {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: texto,
        detail: detalle,
      };
    }
    console.log(snippetsSheetsDef);
    console.log('snippetsSheetsDef');
    return snippetsSheetsDef;
  } catch (error) {
    console.error('Error fetching Google Sheet:', error);
    return {}; // Return an empty object in case of error
  }
} 


function SnippetsTable({ snippets }) {
  // Estado para la entrada de búsqueda
  const [searchTerm, setSearchTerm] = useState('');
  const snippetsForTableRef = useRef(snippets);
  const [snippetsForTable, setSnippetsForTable] = useState(snippets);

  // Función para manejar el cambio en la barra de búsqueda
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  

  // Filtrar snippets según el término de búsqueda
  const filteredSnippets = Object.entries(snippets).filter(([key, value]) => {
    return key.toLowerCase().includes(searchTerm.toLowerCase()) ||
           value.insertText.toLowerCase().replace(/\n/g, '<br>').includes(searchTerm.toLowerCase()) ||
           value.detail.toLowerCase().includes(searchTerm.toLowerCase());

  });
 

  
  
  return (
    <div style={{
      display: 'flex', flexDirection: 'row', flexWrap: 'wrap', 
      flexBasis: 'content',
      width: '80%', height: '90%',
      padding: '0px', margin: '5vh 10vw 5vh 10vw',  backgroundColor: '#257874DD',
      justifyContent: 'center', 
      position: 'fixed', zIndex: '200', visibility: 'hidden',
      borderRadius: '10px'
    }} id="snippetsTable"
    >
      <div style={
        { 
          display: 'flex', flexDirection: 'row', flexWrap: 'wrap', 
          width: '100%', padding: '0px', margin: '0px',
          justifyContent: 'space-between',}
      }>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ width: '70%', height: 'fit-content', fontSize: '16px', margin: '9px 16px', padding: '5px' }}
        />
        <button type="reset" style={{width: 'fit-content', height: 'fit-content', backgroundColor:'#333333'}}
          onClick={() => {
            document.getElementById('snippetsTable').style.visibility = 'hidden';
          }}
        >❌(Esc)</button>
      </div>
      <div style={{
        padding: '0px', margin: '0px',
        flexBasis: 'content',
        width: '100%', height: '80%',
        overflowY: 'scroll'
        
      }} >

        <table style={{
          width: 'auto', height: 'auto',
          padding: '0px', margin: '9px 16px', backgroundColor: '#FFFFFF00', 
          border: '1px solid #FFFFFF', color: '#FFFFFF', borderCollapse: 'collapse'
        }}
        >
          <thead>
            <tr>
              <th>Texto de llamado</th>
              <th>Texto a insertar</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody style={{ 
            textAlign: 'left', verticalAlign: 'top', padding: '0px', margin: '0px 0px 0px 0px'
          }} 
          >
            {filteredSnippets.map(([key, value]) => (
              <tr key={key} style={{ margin: '0px 0px 0px 0px'
              }}>
                <td>{key}</td>
                <td style={{whiteSpace: 'pre-line'}}>{
                
                value.insertText
                
                }</td>
                <td>{value.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}



function App() {
  const [contenido, setContenido] = useState('');
  const [md, setMd] = useState('');
  const [snippets, setSnippets] = useState({});
  const snippetsRef = useRef(snippets);
  let sinHooks = '';


  

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const snippetsTable = document.getElementById('snippetsTable');
      snippetsTable.style.visibility = 'hidden';
    }
  });
  document.addEventListener('keydown', (event) => { 
    if (event.altKey && event.key === 'i') {
      const snippetsTable = document.getElementById('snippetsTable');
      snippetsTable.style.visibility = 'visible';
      /* set focus on search bar */
      document.getElementById('search').focus();
      const regex = /\${\d+:([^}]+)}/g;
      
      document.querySelectorAll('td').forEach(td => {
        
        if (regex.test(td.innerHTML) && !td.innerHTML.includes('<span class="highlight">')) {
          td.innerHTML = td.innerHTML.replace(regex, '<span class="highlight">$&</span>');
        }
      });
    }
  });

  // console.log('snippets', snippets);
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
    // display suggestions
    
  };

  
  const onMount = (editor, monaco) => {
    monaco.editor.defineTheme('myTheme', myTheme);
    monaco.editor.setTheme('myTheme');
    editor.focus();
    setContenido(marked(editor.getValue()));
    const fetchSnippets = async () => {
      try {
        const data = await loadGoogleSheet();
        sinHooks = data;
        /* bind data with snippets_basales objetc */
        sinHooks = {...sinHooks, ...snippets_basales};   
        setSnippets(sinHooks);
        snippetsRef.current = sinHooks;

            try {
              // update snippets
              return monaco.languages.registerCompletionItemProvider('markdown', {
                // triggerCharacters: ['.'], // Trigger snippet on dot (can be customized)
                provideCompletionItems: (model, position) => {
                  console.log('inside registerCompletionItemProvider');
                  const suggestions = [];
                  for (const [key, value] of Object.entries(sinHooks)) {
                    suggestions.push({
                      label: key,
                      kind: value.kind,
                      insertText: value.insertText,
                      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                      detail: value.detail,
                      documentation: value.description
                    });
                  }
                  return { suggestions: suggestions };
                }
              }
            );
            }
            catch (error) {
              console.error('Error loading snippets:', error);
            }
            
          } catch (error) {
            console.error('Error loading Google Sheet:', error);
          }
        };
        
        fetchSnippets();
        console.log('fetchSnippets');
        console.log('snippetsRef.current', snippetsRef.current);
        console.log('setSnippets', snippets);

    
  };

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}}>
      
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <SeleccionPlantillas setSelectedFile={setMd} />
        <Autocompletado snippetsPrev={snippetsRef.current} actualizarState={setSnippets} monacoEditor={monaco}/>
        <SnippetsTable snippets={snippetsRef.current} />
        {/* button to show SnippetsTable */}
        <button
          style={{ width: 'fit-content', height: '30px', fontSize: '16px', margin: '10px', padding: '0px' }}
          onClick={() => {
            const snippetsTable = document.getElementById('snippetsTable');
            snippetsTable.style.visibility = 'visible';
            /* set focus on search bar */
            document.getElementById('search').focus();
            const regex = /\${\d+:([^}]+)}/g;
            document.querySelectorAll('td').forEach(td => {
              if (regex.test(td.innerHTML) && !td.innerHTML.includes('<span class="highlight">')) {
                td.innerHTML = td.innerHTML.replace(regex, '<span class="highlight">$&</span>');
              }
            });
          }
        }

        >
          Cheet Sheet (alt + i)
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100vw', height: 'auto', padding: '0px', margin: '0px' }}>
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
            suggestOnTriggerCharacters: true,
          }
        }
          suggest=
            {{snippetsPreventQuickSuggestions: false}}
       
        />
        {/* Preview of Editor markdown */}
        <div style={{ height: 'calc(100vh - 40px)', width: '50vw', backgroundColor: 'white', padding: '0px', overflow: 'auto', 
        color: 'black', fontSize: '16px', fontFamily: 'Arial', textAlign: 'left'
         }}>
          <div dangerouslySetInnerHTML={{ __html: contenido }}></div>
        </div>
      </div>
    </div>
  );
}

async function loadGoogleSheet() {
  let SHEET_ID = '1AjQ6IRZ9fdw13qizrCzGtR3QFeZb6nq2KYms-wJ8Puc';
  let SHEET_TITLE = 'atajos';
  let SHEET_RANGE = 'A1:C100'
  let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);
  console.log('hola desde el loadGoogleSheet');
  
  try {
    const res = await fetch(FULL_URL);
    const rep = await res.text();
    const data = JSON.parse(rep.substr(47).slice(0, -2));
    const snippetsSheets = data.table.rows;
    console.log(snippetsSheets);

    let snippetsSheetsDef = {};

    for (let i = 1; i < snippetsSheets.length; i++) {
      const element = snippetsSheets[i].c;
      const nombre = element[0].v;
      const texto = element[1].v;
      const detalle = element[2].v;
      snippetsSheetsDef[nombre] = {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: texto,
        detail: detalle,
      };
    }
    console.log(snippetsSheetsDef);
    console.log('snippetsSheetsDef');
    return snippetsSheetsDef;
  } catch (error) {
    console.error('Error fetching Google Sheet:', error);
    return {}; // Return an empty object in case of error
  }
}

export default App;
