
var machine = new Raster({
    position : view.center-[0,100],
    source : './data/machine.jpg'
    });
machine.scale(0.2);


var button1 = new Raster({
    position : view.center+[-2,43],
    source : './data/button1.png'
    });

button1.scale(0.2);


button1.onMouseEnter = function(event){
    button1.source = './data/button2.png';
}

button1.onMouseLeave = function(event){
    button1.source = './data/button1.png';
}


function onFrame(){
	button1.rotation += 1;
}


button1.onMouseDown = function(event) {
    this.visible = false;
    machine.visible = false;
    location.href ="index_main.html";
    
}
