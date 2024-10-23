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
    it('1. Búsqueda válida con resultado único', function () {
      /*
      Objetivo: comprobar que al buscar un producto existente introduciendo el tipo de producto, marca y modelo, se muestra un solo resultado y es el correcto
  
      Condicionales iniciales:
        1. Usuario logueado y situado en la página principal
        2. Producto con modelo único exitente en la tienda
        3. filtros de búsqueda desactivados

      Pasos:
        1. Introducir tipo de pructo, marca y modelo del producto en el buscador
        2. Pulsar el botón "Buscar"
  
      Resultado esperado: Se muestra un único resultado y se corresponde con el producto buscado
      */
    })

    it('2. Búsqueda válida con varios resultados', function () {
      /*
      Objetivo: comprobar que el buscador muestra todos los resultados coincidentes con la búsqueda

      Condicionales iniciales:
        1. Usuario logueado y situado en la página principal
        2. 3 modelos distintos del mismo producto y marca exitentes en la tienda
        3. filtros de búsqueda desactivados

      Pasos:
        1. Introducir tipo de producto y marca en el buscador
        2. Pulsar el botón "Buscar"
  
      Resultado esperado: Se muestran como resultado los 3 productos mencionados en las condiciones iniciales
      */
    })

    ////////////////////////////////////////////////
    //////////////// CASOS DE ERROR ////////////////
    ////////////////////////////////////////////////
    it('3. Búsqueda de un producto que no existe', function () {
      /*
      Objetivo: comprobar que el buscador no muestra resultados al realizar una búsqueda exacta de un producto que no existe y
                que se informa al usuario de que no se han encontrado resultados para el texto introducido
  
      Condicionales iniciales:
        1. Usuario logueado y situado en la página principal
        2. filtros de búsqueda desactivados

      Pasos:
        1. Introducir en el buscador un tipo de producto, marca y modelo inexistentes en la tienda
        2. Pulsar el botón "Buscar"
  
      Resultado esperado:
        1. No se muestra ningún resultado
        2. Se muestra el mensaje "No se encontraron resultados"
      */
    })

    it('4. Búsqueda con errores tipográficos', function () {
      /*
      Objetivo: comprobar que el buscador sugiere el término correcto al introducir errores tipográficos en la búsqueda
  
      Condicionales iniciales:
        1. Usuario logueado y situado en la página principal

      Pasos:
        1. Introducir en el buscador un término relativo a un producto existente en la tienda con errores tipográficos
  
      Resultado esperado:
        1. Se muestra el término correcto en desplegable de búsquedas sugeridas
      */
    })

    it('5. Búsqueda vacía', function () {
      /*
      Objetivo: comprobar no se realiza ninguna búsqueda sin haber introducido ningún término en el buscador
                y que se muestra un mesaje de error claro y coherente
  
      Condicionales iniciales:
        1. Usuario logueado y situado en la página principal

      Pasos:
        1. Pulsar el botón "Buscar"
  
      Resultado esperado:
        1. El buscador no realiza ninguna búsqueda
        2. La página no se recarga
        3. Se muestra el mensaje de error "Debe introducir algún término en el buscador"
      */
    })


    ////////////////////////////////////////////////
    //////////////////// FILTROS ///////////////////
    ////////////////////////////////////////////////
    it('6. Filtrado simple de resultados', function () {
      /*
      Objetivo: comprobar el filtrado simple de productos
  
      Condicionales iniciales:
        1. Un usuario busca un producto y obtiene al menos 3 resultados diferenciados por un parámetro filtrable

      Pasos:
        1. Activar el filtro <F>
  
      Resultado esperado: El filtro se aplica correctamente mostrando únicamente el producto que coincide con el filtro aplicado

      Repetir test para cada filtro
      */
    })

    it('7. Filtrado múltiple de resultados', function () {
      /*
      Objetivo: comprobar el filtrado múltiple de productos
  
      Condicionales iniciales:
        1. Un usuario busca un producto y obtiene 6 resultados.
           3 de ellos comparten el parámetro filtrable <A>.
           Uno de estos 3 se diferencia de los otros 2 por un parámetro filtrable <B> que estos comparten.
           
      Pasos:
        1. Activar los filtros <A> y <B>
  
      Resultado esperado: Los filtros se aplican correctamente mostrando únicamente el producto que coincide con ambos filtros
      */
    })

    it('8. Resultados vacíos al buscar un producto existente con un filtro activado que lo descarta', function () {
      /*
      Objetivo: comprobar el filtrado sin resultados
  
      Condicionales iniciales:
        1. Usuario logueado y situado en la página principal
        2. Producto <X> existente en la tienda
        3. filtro de resultados <A> activado
           
      Pasos:
        1. Introducir producto a buscar en el buscador
        2. Pulsar el botón 'Buscar'
  
      Resultado esperado:
        1. No se muestra ningún resultado
        2. Se muestra el mensaje "Ningún resultado coincide con los filtros aplicados"
      */
    })

    it('9. Limpiar filtros', function () {
      /*
      Objetivo: comprobar que se muestran todos los resultados de una búsqueda al limpiar filtros
  
      Condicionales iniciales:
        1. Usuario logueado y situado en la página principal
        2. Busca un producto y obtiene <X> resultados
        3. aplica los filtros <A>, <B> y <C> y obtiene <Y> resultados
           
      Pasos:
        1. Pulsar el botón 'limpiar filtros'
  
      Resultado esperado: Los filtros se desactivan correctamente, volviendo a mostrar los <X> resultados
      */
    })

    it('10. Historial de Búsqueda', function () {
        /*
      Objetivo: comprobar que se muestra el historial de búsqueda al hacer click sobre la barra de búsqueda
  
      Condicionales iniciales:
        1. Usuario logueado y situado en la página principal
           
      Pasos:
        1. Hacer click sobre la barra de búsqueda
  
      Resultado esperado: se muestra el deplegable 'hitorial' con las últimas 5 búsquedas realizadas por el usuario
      */
    })
})