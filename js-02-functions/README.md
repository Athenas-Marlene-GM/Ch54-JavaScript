# Curso de JavaScript: JS-02

## Descripción
Aprender como declarar y usar funciones.

### Objetivos de aprendizaje
-Explicar las funciones y su importancia.
-Definir e invocar funciones.
-Declarar una función que no devuelve ningún valor.
-Declarar una función que devuelve un valor.
-Usar los parámetros de la función.

## Estructura del proyecto

### 1. Carpeta: `public`
Esta carpeta contiene recursos estáticos que serán accesibles públicamente en la aplicación web.

- **`fonts/`**: Almacena las fuentes personalizadas utilizadas en el diseño.
- **`icons/`**: Contiene íconos para botones o elementos gráficos.
- **`images/`**: Archivos de imágenes como logotipos, fondos o cualquier gráfico utilizado en el sitio.
- **`json/`**: Archivos JSON que podrían almacenar datos estructurados para su consumo en la aplicación.

### 2. Carpeta: `src`
Contiene el código fuente principal de la aplicación, organizado en subcarpetas para mantener el código modular y reutilizable.

#### Subcarpeta: `css`
Archivos de estilos CSS globales o específicos de componentes, utilizados para dar diseño a la aplicación.

#### Subcarpeta: `js`
Archivos JavaScript globales o compartidos entre diferentes componentes de la aplicación.

#### Subcarpeta: `modules`
Dividida en módulos reutilizables que encapsulan funcionalidad específica.

- **`footer/footer.js`**: Lógica y comportamiento del pie de página.
- **`header/header.js`**: Lógica y comportamiento del encabezado o barra de navegación.

### 3. Carpeta: `pages`
Organiza las páginas individuales del sitio, con cada página teniendo su propio HTML, CSS y JS.

### 4. Archivos en la raíz
- **`index.html`**: Página principal de la aplicación, suele contener la estructura base y enlazar a los otros módulos y páginas.
- **`.gitignore`**: Lista de archivos y carpetas que deben ser ignorados por Git.
- **`README.md`**: Archivo de documentación que describe el proyecto, su propósito y cómo usarlo.

