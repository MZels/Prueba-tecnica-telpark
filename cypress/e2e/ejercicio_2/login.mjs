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
  it('1. Login exitoso', function () {
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
  it('2. Login con usuario incorrecto', function () {
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
      2. Se muestra el mensaje de error "El nombre usuario indroducido es incorrecto"
    */
  })

  it('3. Login con contraseña incorrecta', function () {
    /*
    Objetivo: comprobar que un usuario con cuenta existente en el sistema no puede hacer LogIn si introduce una contraseña incorrecta
              y que se muestra un mesaje de error claro y coherente

    Pasos:
      1. Navegar a la página de login
      2. Introducir nombre de usuario válido
      3. Introducir una contraseña incorrecta
      4. Presionar botón de login

    Resultado esperado: 
      1. El usuario no puede acceder a la herramienta. Se mantiene en la página de LogIn
      2. Se muestra el mensaje de error "La contraseña indroducida es incorrecta"
    */
  })

  it('4. Login con usuario y contraseña incorrectos', function () {
    /*
    Objetivo: comprobar que un usuario no puede hacer a la herramienta si introduce ambos campos incorrectamente
              y que se muestra un mensaje de error claro y coherente
    Pasos:
      1. Navegar a la página de login
      2. Introducir nombre de usuario incorrecto
      3. Introducir una contraseña incorrecta
      4. Presionar botón de login

    Resultado esperado: 
      1. El usuario no puede acceder a la herramienta. Se mantiene en la página de LogIn
      2. Se muestra el mensaje de error "No existe ningún usuario con esas credenciales"
    */
  })

  it('5. Campo usuario vacío', function () {
    /*
    Objetivo: comprobar que un usuario no puede hacer a la herramienta si introduce una contraseña válida pero deja en blanco el nombre de usuario
              y que se muestra un mesaje de error claro y coherente
    Pasos:
      1. Navegar a la página de login
      2. Dejar el campo 'Nombre de usuario' vacío
      3. Introducir una contraseña válida
      4. Presionar botón de login

    Resultado esperado: 
      1. El usuario no puede acceder a la herramienta. Se mantiene en la página de LogIn
      2. Se muestra el mensaje de error "Nombre usuario vacío. Debe introducir un nombre de usuario"
    */
  })

  it('6. Campo contraseña vacío', function () {
    /*
    Objetivo: comprobar que un usuario no puede hacer a la herramienta si introduce un nombre de usuario válido pero deja en blanco la contraseña
              y que se muestra un mesaje de error claro y coherente
    Pasos:
      1. Navegar a la página de login
      2. Dintroducir un nombre de usuario válido
      3. Dejar el campo contraseña vacío
      4. Presionar botón de login

    Resultado esperado: 
      1. El usuario no puede acceder a la herramienta. Se mantiene en la página de LogIn
      2. Se muestra el mensaje de error "Contraseña vacía. Debe introducir una contraseña"
    */
  })

  ///////////////////////////////////////////////
  /////////////////// SESIÓN ////////////////////
  ///////////////////////////////////////////////
  it('7. Persistencia de sesión', function () {
    /*
    Objetivo: comprobar un usuario logueado puede navegar por las distintas páginas de la herramienta sin perder la sesión

    Pasos:
      1. Navegar a la página de login
      2. Introducir un nombre de usuario válido
      3. Introducir una contraseña válida
      4. Presionar botón de login
      5. Navegar a distintas páginas de la herramienta y comprobar en cada una de ellas que la sesión del usuario sigue activa
      6. Finalmente, comprobar que las cookies y datos en el almacenamiento local son válidos y reflejan el estado de la sesión

    Resultado esperado:
      1. La sesión del usuario se mantiene activa al navegar por distintas páginas de la herramienta
      2. Las cookies y datos en el almacenamiento local son válidos y reflejan el estado de la sesión
    */
  })

  it('8. Cierre manual de sesión', function () {
     /*
    Objetivo: comprobar un usuario logueado puede cerrar su sesión correctamente

    Pasos:
      1. Navegar a la página de login
      2. Introducir un nombre de usuario válido
      3. Introducir una contraseña válida
      4. Presionar botón de login
      5. Suponiendo que se cierra sesión desde la página de perfil: Navegar a dla página 'Mi perfil' y presionar el botón 'Cerrar sesión'
      6. Comprobar que se cierra la sesión y se muestra la página de login

    Resultado esperado: La sesión del usuario se cierra correctamente y éste es redirigido a la página de LogIn
    */
  })

  it('9. Recordar sesión al cerrar el navegador', function () {
    /*
   Objetivo: comprobar que la sesión de un usuario logueado con la opción 'Recordar sesión' se mantiene activa tras cerrar el navegador

   Condiciones iniciales: un usuario logueado con la opción 'Recordar sesión' cierra el navegador

   Pasos:
     1. Abrir el navegador
     2. Navegar a la aplicación

   Resultado esperado: El usuario se mantiene logueado tras el cierre del navegador
   */
 })

  it('10. Timeout de sesión', function () {
    /*
    Objetivo: comprobar que tras un tiempo X de inactividad de un usuario logueado, se cierra su sesión

    Condiciones iniciales: Timeout de sesion establecido al valor mínimo X

    Pasos:
      1. Navegar a la página de login
      2. Introducir un nombre de usuario válido
      3. Introducir una contraseña válida
      4. Presionar botón de login
      5. Esperar X segundos
      6. Comprobar que se cierra la sesión y se muestra la página de login

    Resultado esperado: La sesión del usuario se cierra correctamente tras X segundos de inactividad y éste es redirigido a la página de LogIn
    */
  })
  
  ///////////////////////////////////////////
  //////////////// SEGURIDAD ////////////////
  ///////////////////////////////////////////

  it('11. No completar el Captcha tras múltiples intentos de inicio de sesión fallidos', function () {
    /*
    Objetivo: comprobar que el usuario no puede iniciar sesión sin completar el captcha

    Condiciones iniciales:
      - Número de intentos para la habilitación del captcha = 3

    Pasos:
      1. Navegar a la página de login
      2. Realizar 3 intentos de inicio de sesión fallidos seguidos
      3. Comprobar que se muestra el captcha
      4. Completar las credenciales con valores válidos
      5. Presionar botón de login

    Resultado esperado:
      1. El usuario no puede acceder a la herramienta sin completar el captcha. Se mantiene en la página de LogIn.
      2. Se muestra el mensaje de error "Debe completar el captcha para iniciar sesión"
    */
  })
  
})