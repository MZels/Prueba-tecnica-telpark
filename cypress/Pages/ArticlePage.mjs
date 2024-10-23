export class ArticlePage {

  elements = {
    title: () => cy.title(),
  }

  checkPageTitleContainingText(text) {
    cy.title().then((title) => {
      // comprobamos que el título de la página contenga el término buscado sin diferenciar entre mayúsculas y minúsculas
      expect(title.toLowerCase()).to.include(text.toLowerCase())
    })
  }

  takeScreenshot() {
    /* 
      hacemos una captura de pantalla de los resultados de la búsqueda y la guardamos en la carpeta correspondiente al navegador
      con el que se ejecuta y con la resolución como nombre: por ejemplo: screenshots/ejercicio_1.cy.js/firefox/1980x1080.png
    */
    cy.window().then((win) => {
      cy.screenshot(`${Cypress.browser.name}/${win.innerWidth}x${win.innerHeight}`)
    })
  }

}