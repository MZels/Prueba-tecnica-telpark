/*
ENUNCIADO DEL EJERCICIO 1: Automatización Web Básica

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
const baseUrl = 'https://www.google.com/'

/*
  Hasta donde yo se, con el comando de ejecución "open" no se puede cambiar de navegador, ya que primero seleccionas el navegador sobre el que se ejecutarán las pruebas
  y luego eliges la spec a ejecutar con dicho navegador.

  Es por esto que para la ejecución del mismo test en distintos navegadores y con diferentes resoluciones he definido una serie de scripts en "package.json".
  A cada comando se le indica mediante opciones, el navegador con el que ejecutar los tests y la configuración de resolución de ventana.

  Por último, para facilitar la ejecución de esta prueba técnica, he definido un script que ejecuta todos los demás, de esa manera podremos ejecutar el test con las
  diferentes configuraciones mediante el siguiente comando:

          > npm run e2e:all
*/

describe('Automatización Web Básica', () => {

  // En caso de hacer más tests de búsquedas en google sería útil saltarse el aviso de privacidad de google, por eso guardo la sesión.
  before(() => {
    cy.session('anonymous', () => {
      cy.visit(baseUrl)
      cy.get("#W0wltc").click()
    })
  })

  it(`${Cypress.browser.name} [${Cypress.config("viewportWidth")}x${Cypress.config("viewportHeight")}]`, () => {
    cy.visit(baseUrl) // visitamos google
    cy.get('#APjFqb').type(`${searchText}{enter}`) // escribimos en la barra de búsqueda
    cy.title().should('contains', searchText) // comprobamos que el título de la página contenga el término buscado
    cy.window().then((win) => {
      cy.screenshot(`${Cypress.browser.name}/${win.innerWidth}x${win.innerHeight}`) // hacemos una captura de pantalla de los resultados de la búsqueda
    })
  })
})