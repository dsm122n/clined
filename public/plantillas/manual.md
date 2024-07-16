# Apóyeme con un cafecito ☕

<a href="https://www.buymeacoffee.com/sanmartindx" target="_blank"
style="display: flex; justify-content: center; align-items: center; text-decoration: none; color: #FFDD00; font-weight: bold; font-size: 1.5em; margin-bottom: 1em;"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

# Cómo usar ClinEd

Este editor de texto utiliza monaco-editor que tiene una serie de características y propiedades que facilitan la escritura.

En la mitad izquierda de la pantalla se encuentra el editor de texto, en la mitad derecha se encuentra la **VISTA PREVIA CON FORMATO**. Pulsa cualquier tecla (ej: 'espacio') en algun lugar del editor para que se desplegue la vista previa

Para generar texto con formato adecuado, la escritura debe realizarse con markdown, un lenguaje que se interpreta como un documento html pero con sintaxis más simplificada (utilizado por obsidian también).

Puedes **copiar y pegar el texto de la izquierda o derecha** según si el campo de texto de destino del copiado recibe texto enriquecido con formato (como Word, google docs y algunas páginas) o solo texto "plano". 

## Markdown

A continuación ejemplos de la **sintaxis de markdown**. 

El predeterminado es párrafo, que no requiere sintaxis en particular

Para salto de linea se **debe dejar una línea en blanco**

### Encabezado 3
#### Encabezado 4
...


**Negrita**

*cursiva*

- Lista
- de 
- elementos
- no enumerada

1. Lista
2. de
3. elementos
4. enumerada

...

1. también
1. se 
1. puede 
1. poner un mismo numero y el intérprete lo enumerará automáticamente

> Cita (casi nunca utilizo esto)

El '\\' se utiliza para caracteres que tienen significado en markdown, pero no se desea que se interpreten como tal. Por ejemplo, si se desea escribir un asterisco sin que se interprete como cursiva, se debe escribir 

'\*palabra sin cursiva rodeada de asteríscos\*'

y no '*palabra sin cursiva*'

| Tabla            | de    | elementos                         |
|------------------|-------|----------------------------------------|
| Lo importante es | tener | la primera fila con nombres de columnas|
| separada del     | resto | con el '\|-\|-\|-\|'                    |

<a href="https://www.buymeacoffee.com/sanmartindx" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>


## Funcionalidades adicionales de monaco editor que lo hacen genial

Dentro de las funcionalidades de monaco editor, se pueden destacar las siguientes:
- Inserción de paréntesis de a pares sobre texto seleccionado (selecciona una frase y presiona la tecla de apertura de algún paréntesis.
- Hay muchos atajos (keybindings) útiles para facilitar la escritura. [En este link puedes revisar ejemplos más detalle](https://code.visualstudio.com/docs/editor/codebasics), abajo dejo unas tablas con los más importantes

### Edición básica

| Key Combination       | Action                        |
|-----------------------|-------------------------------|
| **Alt+ ↑ / ↓**        | **Move line up/down**         |
| **Shift+Alt + ↓ / ↑** | **Copy line up/down**         |
| Ctrl+Shift+K          | Delete line                   |
| Ctrl+Enter            | Insert line below             |
| Ctrl+Shift+Enter      | Insert line above             |
| Ctrl+Shift+\\         | Jump to matching bracket      |
| Home / End            | Go to beginning/end of line   |
| Ctrl+Home             | Go to beginning of file       |
| Ctrl+End              | Go to end of file             |
| Ctrl+↑ / ↓            | Scroll line up/down           |
| Alt+PgUp / PgDn       | Scroll page up/down           |
| Ctrl+K Ctrl+C         | Add line comment              |
| Ctrl+K Ctrl+U         | Remove line comment           |
| Ctrl+/                | Toggle line comment           |
| Shift+Alt+A           | Toggle block comment          |
| Ctrl+H                | Replace                       |
| Ctrl+F                | Find                          |
| **Ctrl+Space, Ctrl+I**| **Trigger suggestion**        |

### Multi-cursor and selection

Lo más útil de monaco editor es la posibilidad de tener múltiples cursores y selecciones simultáneas.

| Key Combination             | Action                                  |
|-----------------------------|-----------------------------------------|
| **Alt+Click**               | **Insert cursor**                       |
| **Ctrl+Alt+ ↑ / ↓**         | **Insert cursor above / below**         |
| **Ctrl+D**                  | **Add selection to next find match**    |
| Ctrl+U                      | Undo last cursor operation              |
| Shift+Alt+I                 | Insert cursor at end of each line selected |
| Ctrl+L                      | Select current line                     |
| Ctrl+Shift+L                | Select all occurrences of current selection |
| Ctrl+F2                     | Select all occurrences of current word  |
| Shift+Alt+→                 | Expand selection                        |
| Shift+Alt+←                 | Shrink selection                        |
| Shift+Alt + (drag mouse)    | Column (box) selection                  |
| Ctrl+Shift+Alt + (arrow key)| Column (box) selection                  |
| Ctrl+Shift+Alt +PgUp/PgDn   | Column (box) selection page up/down     |


Con la tecla **f1** se abre una pestaña con más funcionalidades como pasar todo a **mayúscula o minúscula** y viceversa. Prueba seleccionar un texto, luego presiona **f1** y escribe "case" para ver las opciones disponibles.

### Autocompletion

El autocompletado utiliza [este Google Sheets](https://docs.google.com/spreadsheets/d/1AjQ6IRZ9fdw13qizrCzGtR3QFeZb6nq2KYms-wJ8Puc/edit?gid=0#gid=0) como base de datos.

A medida que escribes, el autocompletado te sugerirá textos que coincidan con lo que has escrito. **Presiona "Enter"** para seleccionar la sugerencia. 

Puedes navegar por las opciones con las flechas arriba (↑) y abajo (↓) y seleccionar con "Enter".

<span style="color: #790D0D;">En algunos, cuando se selecciona una opción, se inserta un autocompletado con partes editables. Para navegar entre las partes editables, se utiliza la tecla **Tab** para avanzar al siguiente o **Shift+Tab** para retroceder al anterior.</span>

Para conocer los autocompletados puede presionar **alt+i** o **ctrl+space** en cualquier momento.

<span style="color: #790D0D;">**Nota:** en el torpedo de autocompletados, las partes marcadas en amarillo con formato ${edit} corresponden a las partes editables. Cuando insertas el autocompletado, el cursor se posicionará en la primera parte editable para que puedas escribir. </span>

#### Customización de autocompletado

1. **Puedes descargar el Google Sheets y modificarlo a tu gusto, luego subirlo a tu Google Drive.** Cambia la visualización a "cualquiera con el enlace" y copia el enlace de compartido. No es necesario dar permisos de edición.
2. Para que ClinEd utilice tu base de datos de autocompletado, debes **pegar el link en el campo de texto verde de la sección superior** y clickear en el botón "✨" que está inmediatamente a la izquierda.


<a href="https://www.buymeacoffee.com/sanmartindx" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

