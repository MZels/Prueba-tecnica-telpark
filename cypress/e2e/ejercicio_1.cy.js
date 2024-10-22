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

const login = () => {
  cy.session('user', () => {
    cy.visit(baseUrl)
    cy.get("#W0wltc").click()
  })
}

// En caso de hacer más tests de búsquedas en google sería útil saltarse el aviso de privacidad de google, por eso guardo la sesión.
beforeEach(() => {
  cy.session('user', login)
})

describe('Ejercicio 1', () => {
  it('Automatización Web Básica', () => {
    cy.visit(baseUrl) // visitamos google
    cy.get('#APjFqb').type(`${searchText}{enter}`) // escribimos en la barra de búsqueda
    cy.title().should('contains', searchText) // comprobamos que el título de la página contenga el término buscado
    cy.screenshot('Pagina_de_resultados') // hacemos una captura de pantalla de los resultados de la búsqueda (se guarda en la carpeta por defecto en este caso)
  })
})