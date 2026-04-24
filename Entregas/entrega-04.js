
let diametro = 0
let grosor = 1
//se establece variante de diametro para el ellipse en 0

function setup() {
  createCanvas(600, 600);
  

  frameRate(120);
  
}

function draw() {
  background(221, 154, 194);
  
  push();
    translate(width/2, height/2);
    noFill();
    stroke(209, 64, 129);
    strokeWeight(grosor);
    //el tamaño de la pelota segun la variable de diametro establecida al inicio
    ellipse(0,0, diametro , diametro);
  pop();
  
   
 diametro++;
 //el diametro aumenta de 1 en 1 cada vez que se ejecuta
   if (diametro % 30 === 0) {
    grosor++;
    //si el diametro es multiplo de 30, el grosor del stroke crece una unidad, osea:
    //diametro 0: grosor 1
    //diametro 30 = grosor 2
    //diametro 60 = grosor 3...
  
  }
  
  if (diametro>=580){
    diametro = 0;
    grosor = 1;
      //al alcanzar un diametro de 580 el ellipse obtiene un diametro de 0, se deja en 580 ya que al setear el diametro en 600 el ellips se sobresale del lienzo debido al crecimiento del stroke
  
  }
  

  textFont('Times New Roman');
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Cuento los frames" + "\n hasta volverte a ver... " + "\n" + frameCount , width/2, height/2);
  

  
    if (frameCount > 600) {
    frameCount = 0;
      
    //con frameCount se obtiene la cantidad de frames que han pasado desde que se ejecutó el código
    //al llegar el frameCount a 400 este empieza nuevamente desde cero, de misma forma que el ellipse al alcanzar un diametro de 400
      
    

  }

  
}





