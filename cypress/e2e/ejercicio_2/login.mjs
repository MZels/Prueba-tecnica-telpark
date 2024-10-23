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
  it('Login exitoso', function () {
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
  it('Login con usuario incorrecto', function () {
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

  it('Login con contraseña incorrecta', function () {
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
      2. Se muestra un mensaje de error informando al usuario de que la contraseña introducida es incorrecta
    */
  })

  it('Login con usuario y contraseña incorrectos', function () {
    /*
    Objetivo: comprobar que un usuario no puede hacer a la herramienta si introduce ambos campos incorrectamente
              y que se muestra un mesaje de error claro y coherente
    Pasos:
      1. Navegar a la página de login
      2. Introducir nombre de usuario incorrecto
      3. Introducir una contraseña incorrecta
      4. Presionar botón de login

    Resultado esperado: 
      1. El usuario no puede acceder a la herramienta. Se mantiene en la página de LogIn
      2. Se muestra un mensaje de error informando al usuario de que no existe ningún usuario con esas credenciales
    */
  })

  it('Campo usuario vacío', function () {
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
      2. Se muestra un mensaje de error informando al usuario de que debe introducir el nombre de usuario
    */
  })

  it('Campo contraseña vacío', function () {
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
      2. Se muestra un mensaje de error informando al usuario de que debe introducir la contraseña
    */
  })

  ///////////////////////////// VALIDACIÓN DE ENTRADA /////////////////////////////
  // NOTA: Esto sería más bien un test de componente, 
  //       pero como no se especifica el enfoque de los tests, lo añado igualmente
  /////////////////////////////////////////////////////////////////////////////////
  it('Restriccones de formato en el campo usuario', function () {
    /*
    Objetivo: comprobar que en caso de que el nombre de usuario introducido por el usuario no cumpla con las restricciones de formato definidas
              (como caracteres especiales no permitidos o longitud máxima) éste no pueda acceder al sistema
              y que se muestra un mesaje de error claro y coherente
    Pasos:
      1. Navegar a la página de login
      2. Introducir un nombre de usuario que incumpla una de las restricciones definidas
      3. Introducir una contraseña válida
      4. Presionar botón de login

    Repetir test cara cada restricción definida

    Resultado esperado: 
      1. El usuario no puede acceder a la herramienta. Se mantiene en la página de LogIn
      2. Se muestra un mensaje de error informando al usuario del formato que debe seguir el campo 'Nombre de usuario'
    */
  })

  it('Requisitos de formato en el campo contraseña', function () {
    /*
    Objetivo: comprobar que en caso de que la contraseña introducida por el usuario no cumpla con los requisitos de formato definidas
              (como caracteres especiales no permitidos, caracteres obligatorios, longitud máxima, longitud mínima o conjunto de requisitos a cumplir)
              éste no pueda acceder al sistema y que se muestra un mesaje de error claro y coherente
    Pasos:
      1. Navegar a la página de login
      2. Introducir un nombre de usuario válido
      3. Introducir una contraseña que no cumpla con alguno de los requisitos de formato definidos
      4. Presionar botón de login

    Repetir test cara cada requisito definido

    Resultado esperado: 
      1. El usuario no puede acceder a la herramienta. Se mantiene en la página de LogIn
      2. Se muestra un mensaje de error informando al usuario de los requisitos de formato que debe cumplir la contraseña
    */
  })

  ///////////////////////////////////////////////
  /////////////////// SESIÓN ////////////////////
  ///////////////////////////////////////////////
  it('Persistencia de sesión', function () {
    /*
    Objetivo: comprobar un usuario logueado puede navegar por las distintas páginas de la herramienta sin perder la sesión

    Pasos:
      1. Navegar a la página de login
      2. Introducir un nombre de usuario válido
      3. Introducir una contraseña válida
      4. Presionar botón de login
      5. En caso de que la herramienta permita alguna configuración de usuario, cambiar una configuración de usuario
      6. Navegar a distintas páginas de la herramienta
      7. Comprobar que el usuario puede acceder a la página de perfil y que las cookies de sesión están almacenadas y mantienen sus valores tras el paso 5

    Resultado esperado: La sesión del usuario se mantiene activa y con las cookies correspondientes
    */
  })

  it('Cierre de sesión', function () {
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

  it('Timeout de sesión', function () {
    /*
    Condiciones iniciales: Timeout de sesion establecido al valor mínimo X

    Objetivo: comprobar que tras un tiempo X de inactividad de un usuario logueado, se cierra su sesión

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

  it('No completar el Captcha tras múltiples intentos de inicio de sesión fallidos', function () {
    /*
    Condiciones iniciales:
      - Número de intentos para la habilitación del captcha = 3

    Objetivo: comprobar que el usuario no puede iniciar sesión sin completar el captcha

    Pasos:
      1. Navegar a la página de login
      2. Realizar 3 intentos de inicio de sesión fallidos seguidos
      3. Comprobar que se muestra el captcha
      4. Completar las credenciales con valores válidos
      5. Presionar botón de login

    Resultado esperado:
      1. El usuario no puede acceder a la herramienta sin completar el captcha. Se mantiene en la página de LogIn.
      2. Se muestra un mensaje de error informando al usuario de que debe completar el captcha
    */
  })
  
})