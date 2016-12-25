var brushColor = 'midnightblue';
var brush = "";

var palette=document.createElement('div');
document.body.appendChild(palette);
palette.className="palette";
palette.id='b';

function createCanvas() {
    var canvas = document.createElement('div');
    canvas.className = "canvas";
    canvas.id = 'a';

    for (var v = 0; v < 100; v++) {
        var horizontal = document.createElement('div');
        horizontal.className = 'row';
        horizontal.id = 'horizontal';
        canvas.appendChild(horizontal);

        for (var w = 0; w < 100; w++) {
            var vertical = document.createElement('div');
            vertical.className = 'box';
            vertical.id = 'vertical';
            horizontal.appendChild(vertical);
            vertical.addEventListener('mouseover', paint);

        }
    }
    document.body.appendChild(canvas);
}
function paint(mouseover) {
    var pixel = mouseover.target;
    pixel.style.backgroundColor = brushColor;
}

for(var i=1;i<7;i++) {
    var x = document.createElement('div');
    document.getElementById('b').appendChild(x);
    x.className = "color"+i;
    x.id="color"+i;
    x.addEventListener("click", chooseColor);
}

function chooseColor(e){
    brush =  e.target.id;
    if(brush == 'color1'){
        brushColor = 'midnightblue';
    }
    if(brush == 'color2'){
        brushColor = 'darkgreen';
    }
    if(brush == 'color3'){
        brushColor = 'purple';
    }
    if(brush == 'color4'){
        brushColor = 'lightblue';
    }
    if(brush == 'color5'){
        brushColor = 'gold';
    }
    if(brush == 'color6'){
        brushColor = 'whitesmoke';
    }
}
window.onload=createCanvas();

var btn = document.createElement("BUTTON");
var t = document.createTextNode("Clear");
btn.appendChild(t);
document.body.appendChild(btn);
btn.onclick=(now);

function now(){
    location.reload(true);
}
