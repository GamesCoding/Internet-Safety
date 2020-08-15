function setup(){
    var canvas = createCanvas(100,100,WEBGL);
    canvas.parent('sketch-holder');
}

function draw(){
    background("lightblue");
    rotateX(millis()/1000);
    rotateY(millis()/1000);
    normalMaterial();
    box(50);
}

function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle('active')
}