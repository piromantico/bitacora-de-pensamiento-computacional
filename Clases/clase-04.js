## Clase 04.

function setup() {
  createCanvas(400, 400);
  
  // puedo alterar la velocidad de reproducción
  //que por defecto es 60
  frameRate(10);
}

function draw() {
  background(220);
  
  // con frameCount accedo a la cantidad de frames que han ocurrido desde que se ejecutó el código
  
  // texto de referencia
  textAlign(CENTER, CENTER);
  textSize(40);
  // con \n creo una nueva línea en el mismo comando
  text("desde que se ejecutó" + "\n han pasado" + "\n " + frameCount + "\n frames", width/2, height/2);
  
  //vamos a usar esta información para alterar una pelotita
  
  push();
    translate(width/2, height/2);
    noFill();
    //vamos a ajustar el tamaño de la pelota segun el frameCount
    ellipse(0,0,frameCount,frameCount);
  pop();
  
}

## Clase 04.1

//vamos a crear una variable
//para la posición de la pelotita
// declaramos la variable
// voy a crear una cajita llamada posx que vale 400
// y una cajita llamda posy que vale 150
let posx = 400;
let posy = 150;

//para cambiar el sentido creamos una variable de sentido
// let es el tipo de variable, que quiere decir
//tipo de cajita
// solo se usa al crear la variable
let sentidox = 1;
let sentidoy = 1;

// diametro de pelotita
let diametro = 100;

function setup() {
  createCanvas(800, 600);
  
  // puedo alterar la velocidad de reproducción
  //que por defecto es 60
  frameRate(60);
}

function draw() {
  background(220);
  
  // con frameCount accedo a la cantidad de frames que han ocurrido desde que se ejecutó el código
  
  // texto de referencia
  textAlign(CENTER, CENTER);
  textSize(40);
  // con \n creo una nueva línea en el mismo comando
  text("desde que se ejecutó" + "\n han pasado" + "\n " + frameCount + "\n frames", width/2, height/2);
  
  //vamos a usar esta información para alterar una pelotita
  
  //vamos a hacer nuestra primera iteración
  //en este punto se actualiza posx 
  posx = posx + 10 * sentidox;
  posy = posy + 10 * sentidoy;
  
  
  //vamos a plantear una condición límite
  // por medio de if (si)
  // se declara 
  //if (condicion) { lo que sea que pase }
  
  //rebote en x
  if (posx > width - diametro/2){ //si se cumple esta condición
    //ademas cambie el sentido
    sentidox = -1;
    //diametro = diametro + 2;
  }
  
  if (posx < 0 + diametro / 2){ //si se cumple esta condición
    //posx = 400; //pasa esto
    //ademas cambie el sentido
    sentidox = 1;
    //diametro = diametro + 10;
  }
  
  //rebote en y
  if (posy > height - diametro/2){ //si se cumple esta condición
    //ademas cambie el sentido
    sentidoy = -1;
    //diametro = diametro + 2;
  }
  
  if (posy < 0 + diametro / 2){ //si se cumple esta condición
    //posy = 400; //pasa esto
    //ademas cambie el sentido
    sentidoy = 1;
    //diametro = diametro + 10;
  }
  //diametro = frameCount;
  
  push();
  //ajustamos la posición de la ellipse a posx y posy
    translate(posx, posy);
    noFill();
    ellipse(0,0,diametro,diametro);
  pop();
  
}

## Clase 04.2

//voy a crear una variable para cambiar el HUE
let tinte = 360;
let tinteComplementario = 0;

//hagamos una variable para el tamaño del circulo
let diametro = 250;

function setup() {
  createCanvas(500, 500);
  //hue maximo será 360
  //saturation maximo 100
  //brillo maximo 100
  colorMode(HSB, 360,100,100)
  frameRate(10);
}

function draw() {
  //hagamos que el fondo sea el color complementario
  
  if(tinte < 180){
    tinteComplementario = tinte + 180;
  }
  
  if(tinte > 180){
    tinteComplementario = tinte - 180;
  }
  
  //actualizar el diametro
  //hay una variable que depende de la posicion del mouse en X
  // esta es una variable interna de p5
  //diametro = mouseX; //estas variables internas se colocan en color fucsia
  //diametro = mouseY;
  
  //como hacer que ambos afecten
  //tecnica socratica pitagorica
  //diametro = sqrt(mouseX * mouseX + mouseY + mouseY)
  
  //tecnica de santi
  diametro = (mouseX + mouseY) / 2;
  
  //pueden adoptar numeros aleatorios
  //diametro = random(50,300);
  
  background(tinteComplementario,100,100);
  //vamos a usar la variable tinte
  fill(tinte,40,100)
  ellipse(width/2, height/2, diametro,diametro);
  
  //Actualizamos el valor de tinte
  tinte = tinte + 1;
  
  //para reiniciar
  if (tinte > 360){
    tinte = 0;
  }
  
  
  
  //vamos a escribir el texto en la pantalla
  fill(0,0,0);
  textSize(20);
  textAlign(CENTER,CENTER);
  text(
    "valor de tinte: \n" + tinte + "\n tinte complementario: \n" + tinteComplementario, width/2, height/2);
  //este + de la impresión del texto encadena textos
  
}

























