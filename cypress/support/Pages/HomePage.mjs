export class HomePage {

  elements = {
    searchBar: () => cy.get('#searchInput'),
    submitButton: () => cy.get('button[type="submit"]')
  }

  searchText(text) {
    this.elements.searchBar().type(text) // escribimos en la barra de búsqueda
    this.elements.submitButton().click() // realizamos la búsqueda
  }

}