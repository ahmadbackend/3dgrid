var confLocs=[];
var confTheta=[];
var downer;
var setter;
var redSlider;
var greenSlider;
var blueSlider;
var font;
let alphabet="dfghjklatyguiojpvbnm,lguhujiklbhjnkml".split("");

function preload(){
    font=loadFont('assets/fancy.otf');
}
function setup() {
    createCanvas(900, 800, WEBGL);
    textFont(font);
    console.log(alphabet);
    textSize(32);
    textAlign(CENTER, CENTER);
    
    let blue = createP('blue color');
    blue.style('font-size', '16px');
    blue.position(width, 45);
    
    let green = createP('green color');
    green.style('font-size', '16px');
    green.position(width, 25);
    
    let red = createP('red color');
    red.style('font-size', '16px');
    red.position(width, 10);
    
    angleMode(DEGREES);
    for(let i=0;i<200;i++)
    {
        confLocs.push(createVector(random(-500,500),random(-800,0),random(-500,500)));
       
    }
    for(let i=0;i<360;i++)
    {
        confTheta.push(random(0,360));

    }
   //cubic color sliders
   /*  need a method to make them show and hide
   need a method to add text to guide the user
    */
   redSlider=createSlider(0,255,100);
   redSlider.position(width-105,20);
   redSlider.style("width","100px");
   greenSlider=createSlider(0,255,100);
   greenSlider.position(width-105,40);
   greenSlider.style("width","100px");
   blueSlider=createSlider(0,255,100);
   blueSlider.position(width-105,60);
   blueSlider.style("width","100px");

}

let locX;
let locZ;
function draw() {
    
  // noFill();
    locX=map(cos(frameCount/5),-1,1,-450,450);
    locZ=map(sin(frameCount/5),-1,1,-800,800);
    
   
    camera(locX, -600,locZ,0,0,0,0,1,0); 
   
    background(125);
  
    for(let i=-450;i<450;i+=50)
    {
      
     push();
   
        for(let j=-400;j<400;j+=50)
        {
        push();
           // stroke(0);
            //strokeWeight(2);
           
            translate(i,0,j);
            directionalLight(redSlider.value(),greenSlider.value(),blueSlider.value(),0,1,-1);
            directionalLight(redSlider.value(),greenSlider.value(),blueSlider.value(),0,1,1);


            specularMaterial(255,50,100);
            // zero is the center for 3d coordination system
            let distance=dist(0,0,0,i,0,j);
            let length= map (sin(distance+frameCount),-1,1,100,300);
          //  console.log(distance);
            box(50,length,50);
           

        pop();
        }
    pop();
    }
    confetti();

}
function confetti()
{
    downer= createVector(0,1,0);
    setter=createVector(0,-800,0);
    for(let i=0;i<confLocs.length;i++)
    {
        push();
        translate(confLocs[i].x,confLocs[i].y,confLocs[i].z);
        noStroke();
         push();
        rotate(confTheta[i]);
        rotateX(confTheta[i]);
       // rotateZ(confTheta[i]);
        confTheta[i]+=10;
        
        //ambientLight(50);
        let direc=confLocs[i].copy(); //confLocs[i].z
        directionalLight(255, 0, 130,
            direc.normalize().x,1,direc.normalize().z);
            directionalLight(255, 0, 130,
                direc.normalize().x,1,-direc.normalize().z);
        //console.log(direc);
        specularMaterial(255);
        plane(15);
         pop();
        //to create color contrast 
        fill(255-redSlider.value(),255-greenSlider.value(),255-blueSlider.value())
        text( String.fromCharCode(i*3),20,20);
        noFill();
        noStroke();
       confLocs[i].add(downer);
       if(confLocs[i].y>=height/2)
       {
           confLocs[i].add(setter);
           //console.log(confLocs[i].y);
       }
       
        pop();
       
    }
}

