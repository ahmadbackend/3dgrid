var confLocs=[];
var confTheta=[];
var downer;
var setter;
function setup() {
    createCanvas(900, 800, WEBGL);
    angleMode(DEGREES);
    for(let i=0;i<200;i++)
    {
        confLocs.push(createVector(random(-500,500),random(-800,0),random(-500,500)));
       
    }
    for(let i=0;i<360;i++)
    {
        confTheta.push(random(0,360));

    }
   //console.log(confLocs[2].z);

}
function confetti()
{
    downer= createVector(0,1,0);
    setter=createVector(0,-800,0);
    for(let i=0;i<confLocs.length;i++)
    {
        push();
        translate(confLocs[i].x,confLocs[i].y,confLocs[i].z);
        
        rotate(confTheta[i]);
        confTheta[i]+=10;
        normalMaterial();
        plane(15);
        
        
       confLocs[i].add(downer);
       if(confLocs[i].y>=height/2)
       {
           confLocs[i].add(setter);
           //console.log(confLocs[i].y);
       }
       
        pop();
       
    }
}
let locX;
let locZ=800;
function draw() {
    locX=map(cos(frameCount/5),-1,1,-450,450);
    locZ=map(sin(frameCount/5),-1,1,-800,800);
    
   
    camera(locX, -600,locZ,0,0,0,0,1,0); 
   
    
   // console.log(locX);
    perspective(90)

    background(125);
   
    for(let i=-450;i<450;i+=50)
    {
      
     push();
   
        for(let j=-400;j<400;j+=50)
        {
        push();
           // stroke(0);
            //strokeWeight(2);
            normalMaterial();
            translate(i,0,j);
            
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
