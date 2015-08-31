# nodeschool-es6

[Nodeschool](http://nodeschool.io/es/) es probablemente la plataforma de aprendizaje más utilizada para aprender [Nodejs](https://nodejs.org/), gracias a sus talleres interactivos y presenciales realizados por las diferentes comunidades alrededor del mundo.

Teniendo esto en cuenta, he querido realizar los talleres de Nodeschool yo mismo como parte de mi aprendizaje de Nodejs. Sin embargo, quise darle un giro al asunto utilizando las nuevas carácteristicas presentadas por [ECMAScript® 2015](http://www.ecma-international.org/ecma-262/6.0/) o la versión 6 de JavaScript.

Para las soluciones planteadas en este repositorio he tratado de utilizar conceptos de programación funcional que no necesariamente pueden parecer o ser las soluciones más simples o con mejor rendimiento que se puedan encontrar. Pero sin duda alguna estoy convencido de que el código es más claro y más bonito *(es mi opinión personal y no pretendo crear una discusión al respecto)*.

Para la compilación de los archivos con JavaScript 6 *(o como lo quieras llamar)* utilizo [Babel](https://babeljs.io/), almacenando los archivo fuente en el directorio `src` y los archivos compilados o de salida en el directorio `dist`, archivos que posteriormente utilizo para la verificación de cada uno de los problemas propuestos por los talleres de Nodeschool.

## Estructura

```
.
├── dist
│   └── learnyounode
├── src
|    └── learnyounode
|        └── README.md
├── .gitignore
├── README.md
└── package.json
```

En la estructura de archivos del repositorio podrás encontrar dos directorios principales en donde se encuentran tanto los archivos fuente *(ECMAScript® 2015)* como los archivos de salida compilados por Babel:

### `/dist`
El directorio `dist` contiene todos los archivos de salida compilados por Babel. Estos archivos tiene código compatible con ECMAScript® 5, el cual es 100% compatible con Nodejs y puede ser utilizado para pasar las pruebas o problemas propuestos en los talleres de Nodeschool.

### `/src`
El directorio `src` contiene todos los archivos fuente en los cuales utilizo la nueva sintaxis propuesta para ECMAScript® 2015 separados por directorios que están nombrados de acuerdo al taller específico de Nodeschool.

Cada taller contiene un archivo `README.md` en el cuál presento las notas relacionadas con las características utilizadas para ese problema en particular.

## Colaboraciones

Si estás interesado en mejorar las soluciones ya planteadas o aportar nuevas soluciones a los problemas propuestos en los talleres de Nodeschool haz un fork del respositorio y envía un pull request.

El nombre del pull request debe tener el nombre del taller seguido por el nombre del problema específico a solucionar. Por ejemplo:

```
learnyounode-hello-world
```

**Nota:** los nombres de los directorios y los archivos deben cumplir con la convensión propuesta en la estructura del repositorio.

## Disclaimer

Esta no pretende ser una guía para hacer trampa en los talleres de Nodeschool, pues se perdería completamente el objetivo de la realización del taller. Lo que pretendo con este repositorio es crear una fuente de información acerca de como aplicar la nueva sintaxis y características propuestas para JavaScript 6 en módulos creados para Nodejs.

## Licencia

```
The MIT License (MIT)

Copyright (c) 2015 David Gómez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
