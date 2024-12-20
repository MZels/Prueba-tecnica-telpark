# SOLUCIÓN DE LA PRUEBA TÉCNICA PROPUESTA POR TELPARK PARA QA AUTOMATION

En este repositorio se resuelven los ejercicios de la prueba técnica propuesta en el documento "Prueba técnica para QA Automation" adjunto en el directorio raíz de este repositorio.

## Descripción de la solución propuesta:

Para la solución de esta prueba técnica se ha optado por el siguiente entorno de desarrollo:

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

### 1. Clonar o descargar el repositorio:

**Mediante git:**

1. Crear una carpeta en la que clonar este repositorio
2. Clonar el repositorio: 

        git clone https://github.com/MZels/Prueba-tecnica-telpark

**Por descarga directa**

Descargando el proyecto como zip:

![Descargar zip del proyecto](https://github.com/MZels/Prueba-tecnica-telpark/blob/master/capturas/captura_download_zip.png?raw=true)

### 2. Instalar dependencias del proyecto:

1. Abrir un terminal en tu IDE de preferencia.
2. Situarse en la carpeta raíz del proyecto (donde se encuentra el fichero 'package.json')

        npm install

### Instrucciones de Ejecución de las pruebas

**Caso simple: Ejecución única del test con la interfaz gráfica de Cypress**

1. Desde el IDE, en el directorio raíz del proyecto, abrir Cypress con el comando:

        npx cypress open
   
2. Seleccionar la opción "E2E Testing".
3. Seleccionar el navegador a utilizar para las pruebas.
4. En la sección Specs, se mostrará el fichero con el test que resuelven el ejercicio 1 de la prueba técnica:

    * ejercicio_1.cy.js
   
5. Hacer click sobre él para ejecutarlo (Cypress ejecutará las pruebas de esa Spec en el navegador seleccionado)

**Caso cross-browser: Ejecución repetida del test con distintas configuraciones**

Para la ejecución de estos 4 casos seguidos, se debe introducir el siguiente comando en el terminal:

        npm run e2e:example

## Extensiones recomendadas para el desarrollo con Visual Studio Code:

* **Cypress Fixture-IntelliSense**: Supports your cy.fixture() by providing intellisense for existing fixtures.
* **Cypress Helper**: Various helpers and commands for integration with Cypress.
* **Cypress Snippets**: Useful Cypress code snippets.
* **Cypress Snippets**: This extension includes the newest and most common cypress snippets.
* **Open Cypress**: Allows you to open Cypress specs and single it() blocks directly from VS Code.
* **Test Utils**: Easily add or remove .only and .skip modifiers with keyboard shortcuts or the command palette.


## Detalles de la solución a tener en cuenta

**En el ejercicio 1:**

* Las capturas de pantalla se guardarán en carpetas con el nombre del navegador utilizado y el nombre del fichero será el de la resolución utilizada en el test

* Para el la ejecución del test en distintos navegadores y resoluciones he definido el script "e2e:example" en el fichero 'package.json que ejecuta el test con 4 configuraciones distintas:

    - browser = firefox | resolución fulHD (1980x1080)
    - browser = firefox | resolución mobile (375x667)
    - browser = edge | resolución fulHD (1980x1080)
    - browser = edge | resolución mobile (375x667)


**En el ejercicio 2**
El diseño de las pruebas solitadas, lo he realizado en las correspondientes 'Specs' que implementaría en el proyecto redactándolos en un comentario dentro de cada 'it':

![specs para el ejercicio 2](https://github.com/MZels/Prueba-tecnica-telpark/blob/master/capturas/estructura_specs.png?raw=true)
![ejemplo de spec del ejercicio 2](https://github.com/MZels/Prueba-tecnica-telpark/blob/master/capturas/ejemplo_spec.png?raw=true)

Para la elaboración del plan de pruebas se han considerado únicamente los tests e2e automatizables que aportan valor, por lo tanto no se han tenido en consideración los siguiente tipos de pruebas:

* Pruebas de visualización
* Pruebas 'cross browser'
* Pruebas de carga y rendimiento
* Pruebas de componentes (restricciones de formato en inputs, etc...)

## Autor

Miguel Núñez Zels

## Docs de referencia:

* [Documentación Oficial de Cypress](https://docs.cypress.io/guides)
