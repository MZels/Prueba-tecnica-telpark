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

describe('Búsqueda de productos en eCommerce App', function () {
  
    beforeEach(() => {
      cy.visit(baseUrl) // navegamos a la web 
    })
  
    ////////////////////////////////////////////////
    //////////////// CASOS DE ÉXITO ////////////////
    ////////////////////////////////////////////////
    it('1. Búsqueda válida de un producto existente', function () {
      /*
      Objetivo: comprobar que un usuario con cuenta existente en el sistema puede hacer LogIn con sus datos de acceso
  
      Pasos:
        1. Navegar a la página de login
        2. Introducir nombre de usuario válido
        3. Introducir contraseña válida
        4. Presionar botón de login
  
      Resultado esperado: el usuario accede correctamente a la herramienta con sus credenciales. Esto se puede comprobar de varias maneras dependiendo de la herramienta:
  
        - comprobando que se navega a una página concreta
        - comprobando que se muestra un elemento concreto es visible
        - comprobando el título de la nueva página
      */
    })

    ////////////////////////////////////////////////
    //////////////// CASOS DE ERROR ////////////////
    ////////////////////////////////////////////////
    it('2. Búsqueda con errores tipográficos', function () {

    })

    it('3. Búsqueda vacía', function () {
        
    })

    it('4. Búsqueda de un producto que no existe', function () {
        
    })


    ////////////////////////////////////////////////
    //////////////////// FILTROS ///////////////////
    ////////////////////////////////////////////////
    it('5. Filtrado simple de resultados', function () {
        
    })

    it('6. Filtrado múltiple de resultados', function () {
        
    })

    it('7. Resultados vacíos al buscar un producto existente con un filtro activado que lo descarta', function () {
        
    })

    it('8. Limpiar filtros', function () {
        
    })

    ////////////////////////////////////////////////
    /////////////////  ORDENACIÓN  /////////////////
    ////////////////////////////////////////////////
    it('9. Ordenar resultados', function () {
        
    })

    ////////////////////////////////////////////////
    ////////////////////  OTROS  ///////////////////
    ////////////////////////////////////////////////
    it('10. Historial de Búsqueda', function () {
        
    })
})