https://editor.p5js.org/luxinocte/sketches/oUX4FmCgr


let flutterDerecha;
// permite que la imagen con el personaje mirando a la derecha exista
let flutterIzquierda;
// permite que la imagen con el personaje mirando a la izquierda exista
let flutterActual;
// define cuál es la imagen actual del personaje
let fondoDia;
// fondo de día
let fondoNoche;
// fondo de noche
let fondoActual;
//establece variable de fondo activo

let velocidad = 1;
let velocidadY = 1;
//velocidades de ejes 

let dirX = 1;
let dirY = 1;
//establece direcciones del personaje en los ejes


let intervaloFondo = 1000;
//establece el intervalo en milisegundos para el cambio de fondo - 1000 milisegundos equivalen a un segundo


let ultimoCambio = 0;
//guarda el momento en el que se realiza el ultimo cambio del fondo
//p5 comparar entre tiempo actual - tiempo del último cambio
//así sabe si ya pasó el tiempo suficiente para volver a cambiar el fondo


let posX = 0;
let posY = 0;
//establece posición del personaje

function setup() {
  
  createCanvas(600, 600);

  //se cargan las imagenes del personaje con ambas direcciones
  flutterDerecha = loadImage("./flutthershy1.png");
  flutterIzquierda = loadImage("./flutthershy2.png");

  // se establece la imagen inicial del personaje
  flutterActual = flutterDerecha;

  // carga fondos con variables de dia y noche
  fondoDia = loadImage("./fondodia.webp");
  fondoNoche = loadImage("./nightime.png");

  // establece el fondo inicial
  fondoActual = fondoDia;
}

function draw() {

  //genera el fondo actual - inicial
  image(fondoActual, 0, 0, width, height);

  //dibuja el personaje actual - inicial
  image(flutterActual, posX, posY, 100, 100);

  //regula el movimiento horizontal del personaje
  posX = posX + velocidad * dirX;

  //regula el movimiento vertical
  posY = posY + velocidadY * dirY;

  //controla el rebote en el eje horizontal hasta rebotar a la izquierda
  if (posX > width * 4/5 - 100) {

    // cambia la dirección hacia la izquierda
    dirX = -1;

    // cambia imagen de dirección
    flutterActual = flutterIzquierda;

    //parametro que regula velocidad horizontal randomizada
    velocidad = random(1, 5);
  }

  //controla el rebote en el eje horizontal hasta rebotar a la derecha
  
  if (posX < width * 1/5) {

    // cambia la dirección hacia la derecha
    dirX = 1;

    // cambia imagen de dirección
    flutterActual = flutterDerecha;

    //regula la velocidad horizontal
    velocidad = random(1, 5);
  }

  //controla el rebote en el eje vertical hasta rebotar abajo
  
  if (posY > height - 100) {

    // cambia dirección vertical hacia arriba
    dirY = -1;

    // regula la velocidad vertical randomizada
    velocidadY = random(1, 4);
  }

  //controla el rebote en el eje vertical hasta rebotar arriba
  if (posY < 0) {

    // cambia dirección vertical hacia abajo
    dirY = 1;

    //regula la velocidad vertical randomizada
    velocidadY = random(1, 4);
  }

  //parametro que genera el cambio automático del fondo
  
  if (millis() - ultimoCambio > intervaloFondo) {
  //si ya pasó el tiempo establecido - el fondo cambia

    // alterna entre variables de fondo día y noche
    if (fondoActual == fondoDia) {

      fondoActual = fondoNoche;
      //si el fondo es de día - cambia a noche; si es de noche - cambía a día

    } else {
    //esto permite esta ida y vuelta entre día y noche, sin 'else' el fondo cambiaría solo una vez
      fondoActual = fondoDia;
    }

    // guarda el tiempo actual
    ultimoCambio = millis();
  }

  //líneas guía invisibles que delimitan la area de rebote del personaje
  noStroke();

  line(width * 1/5, 0, width * 1/5, height);
  line(width * 4/5, 0, width * 4/5, height);

  print("Se crea un código en el cuál los parametros se encuentran randomizados: fondo, personaje, dirección y velocidad, generando el rebote y este vuelo por parte del personaje, el fondo alterna entre día y noche. Se emplea uso de chatgpt para entender código de movimiento en ejes, rebote y cambios de imagenes")
  
}
