var carG,logG,p1;
var carAnimation, logAnimation, playerAnimation;     

function setup() {
  createCanvas(1350,2700);
  
  carG = new Group();
  logG = new Group();
  
   for(var i = 0;i<6;i=i+1){
  var grass = createSprite(675,2600-50-(i*400),1360,100)
  grass.shapeColor="gray"
   if (i%2===0){
     var road = createSprite(675,2600-250-i*400,1360,300)
     road.shapeColor="black"
    }
}  
  for(var i = 0;i<100;i=i+1){
    logs=new Log(-5)
    logG.add(logs.spt) 
   }
 
   for(var i = 0;i<100;i=i+1){
    cars=new Car(5)
    carG.add(cars.spt) 
   }
 
   pl = new player(650,2650)
  
  }

function draw() {                        
  background("skyblue");
   
  translate (0,-p1.spt.y+2700-150)
  
  for(i = 1 ;i<logG.length;i=i+1){
    if(logG[i].x<-60) {
      logG[i].x=1430
    }
   }

   for(i = 1 ;i<carG.length;i=i+1){
    if(carG[i].x<-60) {
      carG[i].x=1430
    }
   }
  
   for(i = 1 ; i<carG.length;i=i+1){
    if(carG[i].x>1430) {
      carG[i].x=-60
    }
   }
   
   if(keyDown("left")){
    pl.moveLeft()
  }
  
  if(keyDown("right")){
    pl.moveRight()
  }
   
  if(keyDown("up")){
    pl.moveUp()
  }
  
  if(keyDown("down")){
    pl.moveDown()
  }
     
  drawSprites();
}

