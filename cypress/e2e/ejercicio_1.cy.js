/*
Ejercicio 1: Automatización Web Básica

Desarrolla un script que:

  - Navegue al sitio web de Wikipedia.
  - Busque el término "Automatización de Pruebas".
  - Verifique que el título de la página de resultados contiene el término buscado.
  - Opcional:
      - Capture una captura de pantalla de la página de resultados
      - Se ejecute la misma prueba con distintos navegadores o resoluciones
*/

/// <reference types="cypress" />

const searchText = 'Automatización de Pruebas'
const baseUrl = 'https://www.wikipedia.org/'
const pointBreakResolution = 640

/*
  Entiendo que para la ejecución del mismo test en distintos navegadores y con diferentes resoluciones,
  la solución típica en entornos con CI/CD consiste en realizar diferentes ejecuciones del mismo test pero con distintas configuraciones.

  Para esto he definido una serie de scripts en "package.json".
  A cada comando se le indica a través de sus opciones, el navegador con el que ejecutar los tests y la configuración de resolución de ventana.

  Por último, para facilitar la ejecución de esta prueba técnica, he definido un script que ejecuta 4 casos distintos,
  pudiendo ejecutar dichos casos mediante el sighuiente comando:

          > npm run e2e:example
*/

describe('Automatización Web Básica', () => {

  it(`${Cypress.browser.name} [${Cypress.config("viewportWidth")}x${Cypress.config("viewportHeight")}]`, () => {
    cy.visit(baseUrl) // visitamos wikipedia

    cy.window().then((win) => {
        cy.get('#searchInput').type(`${searchText}`) // escribimos en la barra de búsqueda
        cy.get('#search-form').submit() // realizamos la búsqueda
        cy.title().then((title) => {
          // comprobamos que el título de la página contenga el término buscado sin diferenciar entre mayúsculas y minúsculas
          expect(title.toLowerCase()).to.include(searchText.toLowerCase()) 
        }) 
      /* 
        hacemos una captura de pantalla de los resultados de la búsqueda y la guardamos en la carpeta correspondiente al navegador
        con el que se ejecuta y con la resolución como nombre: po ejemplo: screenshots/ejercicio_1.cy.js/firefox/1980x1080.png
       */
      cy.screenshot(`${Cypress.browser.name}/${win.innerWidth}x${win.innerHeight}`) 
    })
  })
})