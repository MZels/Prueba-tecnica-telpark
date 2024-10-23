# SOLUCIÓN DE LA PRUEBA TÉCNICA PROPUESTA POR TELPARK PARA QA AUTOMATION

En este repositorio se resuelven los ejercicios de la prueba técnica propuesta en el documento "Prueba técnica para QA Automation" adjunto en el directorio raíz de este repositorio.

## Descripción de la solución propuesta:

Para la solución de esta prueba técnica se ha optado por el siguiente entorno tecnológico:

* Cypress como framework de automatización de pruebas
* Javascript con ECMAScript Modules
* Page Object Model como patrón de diseño

## Requisitos previos para la ejecución del proyecto

Para la ejecución de este proyecto es necesario instalar las siguientes herramientas:

* Node.js 18.x, 20.x, 22.x y posteriores (Entorno de ejecución para JavaScript) [Link](https://nodejs.org/)
* Cualquier herramienta de desarrollo software (IDE), por ejemplo: [Visual Studio Code](https://code.visualstudio.com/Download)
* Los navegadores Chrome, Firefox y Edge

Para más detalles puede consultar en el siguiente enlace a la documentación oficial de Cypress los requisitos de sistema para su ejecución:
https://docs.cypress.io/app/get-started/install-cypress#System-requirements

## Instrucciones de instalación

Aunque es común excluír los ficheros necesarios para la ejecución de Cypress (directorio "node_modules" del proyecto) por su peso, con el fin de facilitar la ejecución de esta prueba técnica, el repositorio incluye todo lo necesario para ejecutar la solución. De esta manera, tan solo será neceario clonar el repositorio siguiendo estos pasos:

**Mediante git:**

1. Crear una carpeta en la que clonar este repositorio
2. Clonar el repositorio: 

    > git clone https://github.com/MZels/Prueba-tecnica-telpark

**Por descarga directa**

Descargando el proyecto como zip:

![Descargar zip del proyecto](https://github.com/MZels/Prueba-tecnica-telpark/blob/master/captura_download_zip.png?raw=true)

### Instrucciones de Ejecución de las pruebas

1. Abrir un terminal en tu IDE de preferencia.
2. Situarse en la carpeta raíz del proyecto clonado.
3. Abrir Cypress con el comando:

    > npx cypress open
   
4. Seleccionar la opción "E2E Testing".
5. Seleccionar el navegador a utilizar para las pruebas.
6. En la sección Specs, se mostrarán los dos ficheros de pruebas que resuelven la prueba técnica (uno para cada ejercicio):

    * ejercicio_1.cy.js
    * ejercicio_2.cy.js
   
7. Seleccionar el que se desea ejecutar (Cypress ejecutará las prueba de ese Spec en el navegador seleccionado)

## Extensiones recomendadas para el desarrollo con Visual Studio Code:

* **Cypress Fixture-IntelliSense**: Supports your cy.fixture() by providing intellisense for existing fixtures.
* **Cypress Helper**: Various helpers and commands for integration with Cypress.
* **Cypress Snippets**: Useful Cypress code snippets.
* **Cypress Snippets**: This extension includes the newest and most common cypress snippets.
* **Open Cypress**: Allows you to open Cypress specs and single it() blocks directly from VS Code.
* **Test Utils**: Easily add or remove .only and .skip modifiers with keyboard shortcuts or the command palette.


## Detalles de la solución a tener en cuenta

**En el ejercicio 1:**

* Las capturas de pantalla se guardaran en carpetas con el nombre del navegador utilizado y el nombre del fichero será el de la resolución utilizada en el test

* Para el la ejecución del test en distintos navegadores y resoluciones se ha definido el script "e2e:example" en el fichero 'package.json que ejecuta el test con 4 configuraciones distintas:

    1. browser = firefox | resolución fulHD (1980x1080)
    2. browser = firefox | resolución mobile (375x667)
    3. browser = edge | resolución fulHD (1980x1080)
    4. browser = edge | resolución mobile (375x667)

    Para la ejecución de estos 4 casos seguidos, se debe introducir el comando en el terminal
    > npm run e2e:example

**En el ejercicio 2**
Se han obviado las pruebas de visualización, las pruebas 'cross browser' y las pruebas de carga y rendimiento


## Autor

Miguel Núñez Zels

## Docs de referencia:

* [Documentación Oficial de Cypress](https://docs.cypress.io/guides)
