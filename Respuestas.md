/*

# Taller: Introducción a React Native


# PREGUNTA 1 Entorno de desarrollo y sistema operativo
a) Complete la tabla explicando qué papel cumple cada pieza del entorno de desarrollo móvil:
R:
    Node.js y npm:El  papel que cumple el Node.js es el que permite que ejecutar JavaScript fuera del navegador y npm es un gestor de paquetes  que viene  incluido con el Node.js  y  es el encargado de gestionar e instalar las librerías del proyecto. 

    Metro bundler:el papel que cumple Metro bundler es el empaqueta de JavaScript diseñado especialmente para React Native  su función tomar todo el código del proyecto y las dependencias para transformarlo y unificarlo en un solo archivo JavaScript para que tu teléfono lo entienda y lo ejecute. 

    JDK y Android SDK:el papel que cumple el JDK es dar el  kit de herramientas necesarios para compilar  nuestro proyecto ,ya que las herramientas de compilación de Android están construidas en java y necesitan el JDK para funcionar ,aunque nosotros programamos en JavaScript y el Android SDK es el kit con las herramientas  orientadas específicamente a  Android que incluyen emulador y las librerías necesarias para compilar y ejecutar las aplicaciones en sistema operativos.

    Xcode:el papel que cumple Xcode es el  entorno oficial de Apple que nos sirve compilar, firmar y ejecutar las  aplicaciones para IOS.

    Expo Go:el papel que cumple Expo Go  es la aplicación móvil que permite probar el  ejecutar nuestro código en tiempo real en un dispositivo físico sin tener que compilar nativamente ni  tener que descargar Android Studio en tu pc .

b) Un estudiante con Windows y otro con Linux quieren compilar la misma aplicación para iOS. Explique por qué ninguno de los dos puede hacerlo en su propia máquina y
mencione dos alternativas reales para que igual logren probar y publicar la app.
 R:Al momento que los dos estudiantes con sus sistemas operativos (Windows y Linux) quieran compilar la misma aplicación para IOS ,no podrían hacerlo en sus  propias maquinas porque  el programa que necesitarían para compilar la aplicación es Xcode que solo están instala y ejecuta en Macs-Apple y no existen versiones para los sistemas operativos que tenemos ,las alternativas que tendremos es EAS Buid ( de EXPO ) que es un servicio en la nube donde subes tu aplicaciones  y EXPO lo compila usando sus propias Macs remotas y la otra es pedir prestado o usar una Mac de la universidad solo para el momento de compilar y publicar


c) ¿Qué son las variables de entorno del sistema operativo y por qué el emulador de Android falla cuando ANDROID_HOME o el PATH están mal configurados? Explique la
diferencia entre una variable de usuario y una variable de sistema.
    R:las variables de entorno son valores de configuración  del sistema operativo que funcionan como accesos directos para que los programas sepan donde encontrar archivos y herramientas claves ; al emular en Android falla cuando ANDROID_HOME o el PATH están mal configuradas por que está mal escrita o apunta a otro lado ya que ANDROID_HOME es la ruta exacta donde se instalo el SDK de Android  donde Android Studio o la consola no encuentran los archivos del sistema para poder ser emuladas y en el caso de PATH es una lista de carpeta donde el sistema busca los archivos ejecutables cuando escribes un comando (adb o emulator ) el sistema no sabe donde buscar esos comandos cuando los escribimos en la terminal y da error de comando no encontrado.
    las variables de usuario solo la puede usar quien la creo,en su propia cuenta  y si otro usario inicia sesion en la misma maquina no las podra ver. las variables de sistema aplica para todos los usuario y procesos de esa computadora sin importar quien haya iniciado sesion 

d) Compare el flujo de trabajo con Expo frente a React Native CLI: mencione dos ventajas y dos limitaciones de cada uno, e indique en qué situación elegiría cada opción.
    R:El flujo de trabajo con EXPO frente a React Native CLI es: las ventajas de EXPO es mas fácil de configurar sin tener que instalar Android Studio ni Xcode para empezar a programar y para hacer pruebas simples es  ejecutar la aplicación en dispositivos reales escaneando un código QR con la app EXPO GO , sus limitaciones es el tamaño de archivos por las aplicaciones suelen ser mas pesadas debido a las librerías preincluidas y la restricción de código nativo para poder añadir código personalizado en java o Objective-c es mas complejo requiriendo el uso de config Plugins.
    las ventajas de  React Native CLI da control total sobre el proyecto que podemos acceder directamente a las carpetas nativas como Android y ios para modificar cualquier archivo de configuración y la flexibilidad total ya que es compatible con cualquier librería nativa de terceros sin intermediarios pero sus limitaciones es la instalación compleja ya que requiere una configuración inicial rigurosa de los entornos de desarrollo y el mantenimiento costosos ;las situaciones que elegiría cada opción es con EXPO para aplicaciones estándar y con  React Native CLI si la app necesita integrarse con hardware muy especifico.


# PREGUNTA 2 Fundamentos de React Native

a) React Native no renderiza HTML. Complete la equivalencia entre el elemento web y el componente que cumple esa función en React Native:
    R
    En la web | En React Native 
    `<div>` !`<View>` 
    `<p>` o `<span>` !`<Text>` 
    `<img>` | `<Image>` 
    `<input>` | `<TextInput>` 
    Lista larga con scroll | `<FlatList>` 

b) Explique tres diferencias entre los estilos de React Native y el CSS tradicional. Incluya obligatoriamente el valor por defecto de flexDirection y por qué esa decisión tiene
sentido en un dispositivo móvil.
    R:React Native no usa css tradicional sino objeto de estilo de JavaScript ('StyleSheet.create') donde creamos cada componente que define sus propios estilos con un objeto que no heredan estilos de otros elementos como pasa con la cascada en css  , no existe la unidad 'px'o'em' como en la web que son numeros puros que representan pixeles de densidad independiente;los nombres se escriben en camelCase y no con guiones como el css tradicional ej:marginBottom.el flexDirection por defecto es column  porque las pantallas de los celulares son verticales,a diferencia de los monitores de pc que son horizontales.
c) ¿Cuál es la diferencia entre props y estado? Dé un ejemplo de un dato que debería ser prop y uno que debería ser estado dentro de una pantalla de lista de productos.
    R:Las props son datos inmutables que un componente padre le envía a un hijo, el estado es memoria interna e interactiva del componente que puede cambiar, en una lista de productos, una prop sería el color o el estilo que le paso al componente visual de cada tarjeta, y el estado sería la lista de productos descargada de la base de datos que se actualiza si el usuario hace una búsqueda.
# PREGUNTA 3 Manejo de pantallas y navegación

a) Describa para qué sirve cada tipo de navegador y proponga un caso de uso real para cada uno:
 R:
    Stack:  Apila pantallas una sobre otra y permite retroceder y el caso de uso es el Flujo de registro paso a paso o ir de una lista al detalle.
    Tabs: Muestra pestañas (abajo o arriba) para cambiar de vista y el caso de es el uso menú principal de Instagram (Inicio, Buscar, Perfil).
    Drawer : Despliega un menú lateral oculto al deslizar y el caso de uso es Menú de configuraciones o secciones secundarias en una app bancaria.

b) ¿Qué función cumple el contenedor que envuelve toda la navegación de la app y por qué debe existir uno solo en todo el proyecto?
  R:El NavigationContainer  gestiona el árbol de rutas y el estado de la navegación de la aplicación que solo debe existir uno en la raíz del proyecto porque si hubiera varios intentarían manejar el estado al mismo tiempo causando conflictos con la aplicación ya que no sabrá que  pantalla mostrar al presionar atrás.

c) Explique cómo se envía un parámetro de una pantalla a otra al navegar y cómo lo lee la pantalla de destino. ¿Qué tipo de dato conviene enviar: el objeto completo o
únicamente su identificador? Justifique.
  R:el parámetro  que se envía en el botón mediante navigation.navigate('Pantalla', { id: 1 }) y se lee en el destino con route.params.id. Conviene enviar solo el identificador (el ID) y no el objeto completo, porque si la información del objeto cambia en la base de datos mientras navegas, la pantalla de destino mostraría datos viejos. Con el ID, la pantalla hace la consulta y trae la información actualizada.
   
d) Cuando el usuario navega de la pantalla A a la B y luego regresa, ¿la pantalla A se vuelve a crear desde cero o conserva su estado? Explique qué implicación tiene esa
respuesta cuando la pantalla A muestra una lista que debe refrescarse tras crear un registro nuevo.
    R:la navegación del usuario en las pantallas A a la B y luego regresar es que la pantalla A no se destruye por defecto ya que permanece montada en la pila donde solo se queda pausada debajo de la pantalla B a la implicación es que si la pantalla B crea un nuevo registro y luego retrocede a la lista en la pantalla A no se refresca automáticamente por que su ciclo de vida useEffect inicial no se vuelva a disparar se soluciona usando un listener en tiempo real. 

e) ¿Qué diferencia hay en el comportamiento del regresar entre Android e iOS a nivel de sistema operativo, y cómo lo resuelve la librería de navegación?
  R:la diferencia que hay en el comportamiento del regresar entre Android e IOS a nivel de sistema operativo, Android tiene un botón físico o en barra de navegación propio del sistema para retroceder mientras que OIS depende del gesto de deslizar desde el borde izquierdo o un botón en la interfaz lo que hace React Navigation para resolver esto interceptando el botón de hardware en Android y habilitando automáticamente el gesto de deslizamiento en IOS para mantener el flujo stack unificado.

 # PREGUNTA 4 Configuración base de Firebase
 a) Enumere en orden los pasos necesarios para dejar un proyecto de Firebase listo para ser consumido desde una app de React Native, desde la creación del proyecto en la
consola hasta la inicialización dentro del código.
  R:los pasos necesarios para dejar un proyecto de Firebase listo para ser consumido desde una app de React Native son:paso1:es crear un nuevo proyecto  en la [consola de Firebase](https://console.firebase.google.com/),paso 2 es registrar la aplicación tipo "web" para generar las credenciales,paso 3 habilitamos la base de datos Firestore y creamos la colección inicial que nuestro caso es 'contactos';paso4 vamos instalar el SDK en nuestro proyecto con npm install firebase ,paso5 creamos un archivo en raíz de nuestro proyecto con el nombre firebaseConfig.js donde inicializamos la app con nuestras credenciales dadas en nuestro caso serán guardadas en archivo .env  y exportamos la instancia de la base de datos.

 b) Explique qué identifica cada una de estas claves del objeto de configuración:
   R:apiKey:s la llave publica para que podamos acceder a los servicios de la API de Firebase. 
    projectId: es nombre o  identificador único del proyecto en los servidores de Google.
    appId:es el identificador especifico de la aplicación web o móvil dentro del proyecto.
    storageBucket:es la ruta del servidor donde se guardaran los archivos multimedia 

c) La apiKey de Firebase queda visible en el paquete de la aplicación y cualquiera puede extraerla. Explique por qué eso no constituye por sí solo una falla de seguridad y dónde reside entonces la protección real de los datos.
  R:la apiKey en Firebase funciona diferente que en otros servicios ya que solo sirve para pedirle a Google a que proyecto pertenecen  las peticiones pero no da permiso de administrador ,no es una falla de seguridad de que sea visible porque la protección real de los datos esta  en las reglas de seguridad que se configuran directamente en la consola de firebase

d) ¿Qué diferencia hay entre iniciar Firestore en modo de prueba y en modo de producción? ¿Qué riesgo concreto corre una app que se publica con las reglas en modo de prueba?
  R:la diferencias que hay entre iniciar Firestore en modo de prueba y en modo de producción es que al inicializar en modo de prueba permite que cualquier persona sin autenticarse lea ,edite o borre la base de datos durante 30 días ,mientras que el de producción bloquea todo por defecto; el riesgo de publicar una app con el modo de prueba es que cualquiera persona que conozca  el projectId que es publico y fácil de extraer puede hacer peticiones directas en nuestro Firestore sin necesidad de interceptar nada porque el modo de prueba no piden ninguna autenticación.

e) Compare Cloud Firestore y Realtime Database en al menos tres aspectos, e indique cuál elegiría para la aplicación de la Part2 y por qué.
  R:el  Cloud Firestore organiza y  guarda los datos en un documento y colecciones soportando consultas mas  expresivas y escala mejor en app grandes , realtime Database  almacena todo como único árbol JSON con consultas limitadas pero latencias de sincronización ligeramente menor ,en la  aplicación de la parte 2 del taller elegí Cloud Firestore para la colección  porque el modelo de documentación se adapta a los perfiles de los contactos y facilita consultarlos individualmente por ID  





 


    */