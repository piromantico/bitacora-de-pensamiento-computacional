## Clase 02

function setup() {
  //podemos hacer que el tamaño del lienzo se ajuste al tamaño de la ventana
  //hay dos variables nativas: windowWidth y windowHeight
  createCanvas(500, 500);
  //en este punto tambien le doy el tamaño a la variable width y height
}

function draw() {
  //por defecto, con un argumento
  //background genera un tono de gris, en el rango 0-255
  
  //si pongo 3 argumentos, el color es RGB
  //modos de color: rgb, cmyk, hex, hsb
  //hsb: hue saturation brightness + alpha
  //hue: tono
  //alpha: opacidad
  //para cambiar el modo de color se usa
  //colorMode(HSB, 360, 100, 100, 100)
  //colorMode(modo, maximoHue, maxSat, maxBright, maxOpacidad)
  
  colorMode(HSB, 360, 100, 100, 100)
  background(360, 100, 100, 100);
  
  //quiero colocar un círculo en el centro
  //parametrizar
  //hay dos parametros que son natuvos
  //width y height
  //cada vez que llamo a width obtrngo el ancho del canvas
  print(width);
  //puedo aplcar álgebra sobre las variables nativas
  circle(width/2,height/2,width/6);
  
  //agreguemos un triángulo en otra parte
  //triangle(x1,y1, x2,y2, x3,y3);
  //sobre cualquier parámetro puedo aplicar suma, resta, división, o multiplicación.
  triangle(width/6, height/4, width/2,height/4,width/6,height-50);
  
  //para hacer un cuadrado
  //square(posX, posY, tamaño lado)
  //square(width-100,height-100, 30)
  //estamos trabajando con valores relativos
  //en este ejemplo el tamaño del cuadrado es relativo al ancho
  square(width*3/4,height-height/4, width*0.09);
  
  //función de vértices: vertex
  //necesitan estar entre beginShape(); y endShape();
  //esta manera de escribir se llama camelCase
  //a los lenguajes de programación no le gustan los espacios
  //por eso es necesario sostener un estilo consistente
beginShape();
   //vertex(posVerticeX, posVerticeY);
  strokeWeight(5);
  vertex(450, 150);
  vertex(40, 160);
  vertex(380, 190);
  vertex(370, 200),
  vertex(30, 15);
  //si quiero que la figura quede bien cerrada
  //debo incluir el inicio
  //vertex(450, 100)
  //también puedo agregar CLOSE como argumento a endShape
endShape(CLOSE);
}

## Clase 02.1

function setup() {
  //podemos hacer que el tamaño del lienzo se ajuste al tamaño de la ventana
  //hay dos variables nativas: windowWidth y windowHeight
  createCanvas(windowWidth, windowHeight);
  //en este punto tambien le doy el tamaño a la variable width y height
}

function draw() {
  //por defecto, con un argumento
  //background genera un tono de gris, en el rango 0-255
  //si pongo 3 argumentos, el color es RGB
  //modos de color: rgb, cmyk, hex, hsb
  //hsb: hue saturation brightness + alpha
  //hue: tono
  //alpha: opacidad
  //para cambiar el modo de color se usa
  //colorMode(HSB, 360, 100, 100, 100)
  //colorMode(modo, maximoHue, maxSat, maxBright, maxOpacidad)
  
  colorMode(HSB, 360, 100, 100, 100)
  background(360, 100, 100, 100);
  
  //quiero colocar un círculo en el centro
  //parametrizar
  //hay dos parametros que son natuvos
  //width y height
  //cada vez que llamo a width obtrngo el ancho del canvas
  print(width);
  
  
  //puedo aplcar álgebra sobre las variables nativas
  //todo lo que se geneere despues de noFill
  noFill(),
  circle(width/2,height/2,width/6);
  
  //agreguemos un triángulo en otra parte
  //triangle(x1,y1, x2,y2, x3,y3);
  //sobre cualquier parámetro puedo aplicar suma, resta, división, o multiplicación.
  triangle(width/6, height/4, width/2,height/4,width/6,height-50);
  
  //para hacer un cuadrado
  //square(posX, posY, tamaño lado)
  //square(width-100,height-100, 30)
  //estamos trabajando con valores relativos
  //en este ejemplo el tamaño del cuadrado es relativo al ancho
  square(width*3/4,height-height/4, width*0.09);
  
  //función de vértices: vertex
  //necesitan estar entre beginShape(); y endShape();
  //esta manera de escribir se llama camelCase
  //a los lenguajes de programación no le gustan los espacios
  //por eso es necesario sostener un estilo consistente
beginShape();
   //vertex(posVerticeX, posVerticeY);
  strokeWeight(5);
  vertex(450, 150);
  vertex(40, 160);
  vertex(380, 190);
  vertex(370, 200),
  vertex(30, 15);
  //si quiero que la figura quede bien cerrada
  //debo incluir el inicio
  //vertex(450, 100)
  //también puedo agregar CLOSE como argumento a endShape
endShape(CLOSE);
  //con text ("palabras entre comillas dobles" pos X, pos Y)
  //recuerden darle relleno al texto con fill
  fill(0);
  //con textSize(tamaño); cambio el tamaño de la fuente
  textSize(20);
  //alineamos el texto al centro
  textAlign(CENTER,CENTER);
  //para cambiar la tipografia utilizaremos
  //textFont('tipo de fuente'); (con comilla simple)
  //también existen las fuentes 'monospace' 'serif' y 'sans serif'
  
  //también se pueden cambiar los estilos de texto
  textStyle(ITALIC),
  textFont('Comic Sans MS')
  text("BAGDAD", width/2,height/2);
  line(width/2.40, height/2+12, width, height/2+10)
}

## Clase 02.2

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 225, 0);
  
  
  
  //vamos a trabajar con rotaciones
  //por defecto las rotaciones trabajan en radianes
  //para trabajar en grados de 0 a 360
  //se usa angleMODE(DEGREES);
  angleMode(DEGREES);
  rotate(frameCount)
  line(0,0,width,0);
  
  //vamos a trabajar con rectángulos
  //para hacer un rectángulon usamos rect con estos parámetros:
  //rect(pos X, posY, ancho, altop, redondeo TopLeft, tr, bl, br); los redondeos son opcionales
  //quinto parámetro redondea todas las esquinas
  //con rectMode(CENTER) hacemos que se genere desde el centro del rectángulo
  //el centro del rectángulo. También está RADIUS.
  
  //voy a usar translate(); para correr el eje de coordenadas y generar cada figura en un nuevo centro
  
  
  //push y pop también sirven para asignar colores
  //rellenos, contorno y que no se traspase a las siguientes figuras
  push();
  //muevo el eje de coordenadas al centro del lienzo
  translate(width/4,height/4);
  rotate(10);
  fill(0);
  rectMode(CENTER);
  rect(0, 0, 100, 80, 15);
  pop();
  
  
  //el circulo al no estar dentro de un push pop
  //vuelve a ser controlado por el eje de coordenadas inicial
  circle(100,100,30)
}
