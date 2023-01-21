function setup() {
    createCanvas(900, 800, WEBGL);
    angleMode(DEGREES);
   

}

function draw() {
    let locX=map(noise(frameCount/100),0,1,300,800);
     camera(800, -600, 800,0,0,0,0,1,0);
    background(125);
    
    for(let i=-400;i<400;i+=50)
    {
     push();
        for(let j=-400;j<400;j+=50)
        {
        push();
            stroke(0);
            strokeWeight(2);
            normalMaterial();
            translate(i,0,j);
            
            // zero is the center for 3d coordination system
            let distance=dist(i,0,j,0,0,0);
            let length= map (sin(distance*frameCount/100),-1,1,100,300);
            box(50,length,50);

        pop();
        }
    pop();
    }

}
