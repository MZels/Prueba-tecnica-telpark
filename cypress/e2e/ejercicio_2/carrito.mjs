/*
  Ejercicio 2: Diseño de Pruebas

  Supón que estás probando una aplicación de comercio electrónico que tiene las siguientes características:

    • Inicio de sesión de usuario.
    • Búsqueda de productos.
    • Añadir productos al carrito.

  Tarea:

    • Diseña un conjunto de casos de prueba automatizados para esta aplicación.
    • Enumera al menos 5 casos de prueba, detallando el objetivo, los pasos y el resultado esperado.
*/

const baseUrl = 'url de la aplicación eCommerce'

describe('Login eCommerce App', function () {
  
  beforeEach(() => {
    cy.visit(baseUrl) // navegamos a la web 
  })

  ////////////////////////////////////////////////
  //////////////// CASOS DE ÉXITO ////////////////
  ////////////////////////////////////////////////
  it('Añadir un producto al carrito', function () {
    /*
    Objetivo: comprobar que un usuario con cuenta existente en el sistema no puede hacer LogIn si introduce un nombre de usuario incorrecto
              y que se muestra un mesaje de error claro y coherente

    Pasos:
      1. Navegar a la página de login
      2. Introducir nombre de usuario incorrecto
      3. Introducir contraseña válida
      4. Presionar botón de login

    Resultado esperado: 
      1. El usuario no puede acceder a la herramienta. Se mantiene en la página de LogIn
      2. Se muestra un mensaje de error informando al usuario de que el nombre de usuario introducido es incorrecto
    */
  })

  it('Añadir varios productos al carrito', function () {
    /*
    Objetivo: comprobar que un usuario con cuenta existente en el sistema no puede hacer LogIn si introduce un nombre de usuario incorrecto
              y que se muestra un mesaje de error claro y coherente

    Pasos:
      1. Navegar a la página de login
      2. Introducir nombre de usuario incorrecto
      3. Introducir contraseña válida
      4. Presionar botón de login

    Resultado esperado: 
      1. El usuario no puede acceder a la herramienta. Se mantiene en la página de LogIn
      2. Se muestra un mensaje de error informando al usuario de que el nombre de usuario introducido es incorrecto
    */
  })
})