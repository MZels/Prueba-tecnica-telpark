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

import { HomePage } from "../../Pages/HomePage.mjs"
import { ArticlePage } from "../../Pages/ArticlePage.mjs"

/*
  Para la ejecución del mismo test en distintos navegadores y con diferentes resoluciones, he definido una serie de scripts en "package.json".
  A cada comando se le indica a través de sus opciones, el navegador con el que ejecutar los tests y la configuración de resolución de ventana.

  Por último, para facilitar la ejecución de esta prueba técnica, he definido un script que ejecuta 4 casos distintos,
  pudiendo ejecutar dichos casos mediante el sighuiente comando:

          > npm run e2e:example
*/

const textToSearch = 'Automatización de Pruebas'
const baseUrl = 'https://www.wikipedia.org/'

describe('Automatización Web Básica', function () {
  //En caso de tuviesemos mas tests sobre la página de wikipedia la navegación a la misma sería un paso común a todos los tests
  beforeEach(() => {
    cy.visit(baseUrl) // navegamos a la web de wikipedia
  })

  it(`${Cypress.browser.name} [${Cypress.config("viewportWidth")}x${Cypress.config("viewportHeight")}]`, function () {
    const homePage = new HomePage
    homePage.searchText(textToSearch)

    const articlePage = new ArticlePage
    articlePage.checkPageTitleContainingText(textToSearch)
    articlePage.takeScreenshot()
  })
})