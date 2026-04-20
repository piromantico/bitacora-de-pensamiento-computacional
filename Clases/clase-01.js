## Clase 01

function setup() {
  createCanvas(400, 400);
  //holi soy un comentario :D
  print("hola mundo, alo");
}

function draw() {
  background(220);
}

## Clase 01.1

function setup() {
  createCanvas(400, 300);
}//Esto es una función llamada createCanvas();
//una función usualmente tiene argumentos
//createCanvas(tamaño-horizontal, tamaño vertical)

function draw() {
  //background es una función que asigna un color de 
  //fondo
  //el argumento de background da el color
  //donde 0 es negro y 255 es blanco
  //en RGB, separando cada uno por coma
  background(255,250,20);
  
  
  //voy a generar mi primera línea
  //funcion line (x origen, y origen, x destino, y destino)
  //el color del contorno es con stroke(r, g, b);
  stroke(10,0,0);
  //para cambiar el grosor del contorno se utiliza
  //strokeWeight(tamaño en px)
  strokeWeight (2);
  line(100, 100, 200, 200);
  line(100,100, 300, 100);
  line(300, 100, 200, 200);
  
  //para hacer un elipse le decimos a la función
  //elipse(centro X, centro Y, ancho, alto);
  
  //para cambiar relleno, uso fill
  //este debe ir antes de la figura que quiero rellenar
  //se completa con el color en escala de grises (0 255)
  //o en rgb
  fill(250,50,100);
  ellipse(70,200, 100,100);
  
  //para hacer un cuadrado se usa square (centro X, centro Y, tamaño lado)
  //las variables en corchetes son opcionales, y en este caso significan redondeo de esquinas
  //square(x, y, s, [tl], [tr], [br], [bl])
  
  
  //para no rellenar nada se usa noFill();
  noFill();
  square(350, 255, 30);
  
  
  //para hacer un triangulo, cada vertice se indica de pares
  //x, y de la siguiente manera
  //triangle(x1, y1, x2, y2, x3,y3);
  triangle(300,80, 200, 200, 300, 250);
  triangle(300,90, 250, 100, 300, 250);
  triangle(300,80, 200, 200, 300, 250);
  triangle(300,80, 200, 210, 340, 220);
  triangle(200,180, 200, 200, 300, 250);
  triangle(150,80, 100, 100, 200, 100);
  
}
