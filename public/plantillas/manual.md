# Cómo usar ClinEd

Este editor de texto utiliza monaco-editor que tiene una serie de características y propiedades que facilitan la escritura.

En la mitad izquierda de la pantalla se encuentra el editor de texto, en la mitad derecha se encuentra la **VISTA PREVIA CON FORMATO**. Pulsa cualquier tecla (ej: 'espacio') en algun lugar del editor para que se desplegue la vista previa

Para generar texto con formato adecuado, la escritura debe realizarse con markdown, un lenguaje que se interpreta como un documento html pero con sintaxis más simplificada (utilizado por obsidian también).

Puedes copiar y pegar el texto de la izquierda o derecha según si el campo de texto de destino recibe texto enriquecido con formato o solo texto "plano".

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



## Funcionalidades adicionales de monaco editor que lo hacen genial

Dentro de las funcionalidades de monaco editor, se pueden destacar las siguientes:
- Inserción de paréntesis de a pares sobre texto seleccionado (selecciona una frase y presiona la tecla de apertura de algún paréntesis.
- Hay muchos atajos (keybindings) útiles para facilitar la escritura. [En este link puedes revisar ejemplos más detalle](https://code.visualstudio.com/docs/editor/codebasics), abajo dejo unas tablas con los más importantes

### Edición básica

| Key Combination       | Action                        |
|-----------------------|-------------------------------|
| **Alt+ ↑ / ↓**        | **Move line up/down**         |
| **Shift+Alt + ↓ / ↑ **| **Copy line up/down**         |
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

### Autocompletion
