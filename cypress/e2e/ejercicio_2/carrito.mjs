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
    Objetivo: comprobar que se puede añadir un producto al carrito

    Condiciones inicales:
      1. Usuario logueado en la página principal
      2. Carrito vacío

    Pasos:
      1. Navegar a la página del producto
      2. Presionar botón 'Añadir al carrito'
      3. Comprobar que se muestra el mensaje "Producto añadido al carrito"
      4. Navegar a la página 'Mi carrito'

    Resultado esperado: 
      1. En el paso 3 se muestra el mensaje "Producto añadido al carrito"
      2. El producto se añade correctamente al carrito
    */
  })

  it('Añadir múltiples productos al carrito', function () {
    /*
    Objetivo: comprobar que se pueden añadir varios productos al carrito

    Condiciones inicales:
      1. Usuario logueado en la página principal
      2. Carrito vacío

    Pasos:
      1. Navegar a la página del producto
      2. Presionar botón 'Añadir al carrito'
      3. Comprobar que se muestra el mensaje "Producto añadido al carrito"
      4. Repetir pasos 1, 2 y 3 para 3 productos distintos y para uno repetido
      5. Navegar a la página 'Mi carrito'

    Resultado esperado:
      1. En el paso 3 de cada iteración se muestra el mensaje "Producto añadido al carrito"
      2. Todos productos se añaden correctamente al carrito
    */
  })

  it('Modificar cantidad de un producto en el carrito', function () {
    /*
    Objetivo: comprobar que se puede modificar la cantidad de un producto desde la página 'Mi carrito'

    Condiciones inicales:
      1. Usuario logueado en la página 'Mi carrito'
      2. Carrito con 3 unidades de un producto <A> y 1 unidad de un producto <B>

    Pasos:
      1. Eliminar una unidad del producto <A> haciendo click en el botón '-'

    Resultado esperado:
      1. Se muestra el mensaje 'Carrito actualizado'
      2. Se actualiza el carrito correctamente, quedando con 2 unidades del producto <A> y 1 del producto <B>
      3. El importe total del carrito se actualiza correctamente
    */
  })

  it('Eliminar un producto con varias unidades del carrito', function () {
    /*
    Objetivo: comprobar que se puede eliminar con solo un click todas las unidades de un producto desde la página 'Mi carrito'

    Condiciones inicales:
      1. Usuario logueado en la página 'Mi carrito'
      2. Carrito con 3 unidades de un producto <A> y 1 unidad de un producto <B>

    Pasos:
      1. Hacer click en el botón 'Papelera' del producto <A>

    Resultado esperado:
      1. Se muestra el mensaje 'Producto elminado del carrito'
      2. Se actualiza el carrito correctamente, quedando únicamente 1 unidad del producto <B>
      3. El importe total del carrito se actualiza correctamente
    */
  })

  ////////////////////////////////////////////////
  //////////////// CASOS DE ERROR ////////////////
  ////////////////////////////////////////////////
  it('Añadir un producto sin stock al carrito', function () {
    /*
    Objetivo: comprobar que la aplicación no permite añadir un producto sin estock al carrito, mostrando un mensaje informativo
              y ofreciendo la posibilidad de añadir el producto a la lista de deseos

    Condiciones inicales:
      1. Usuario logueado en la página de un producto sin stock

    Pasos:
      1. Pulsar el botón 'Añadir al carrito'

    Resultado esperado:
      1. Se muestra un popup con el mensaje 'Producto sin stock' y un botón para añadir el producto a la lista de deseos con el texto
         'Puedes añadir el producto a tu lista de desos y te avisaremos cuando vuelva a estar disponible'.
      2. El producto no se añade al carrito
    */
  })
})