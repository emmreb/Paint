var palette=document.createElement('div');
document.body.appendChild(palette);
palette.className="palette";
palette.id='b';

var canvas=document.createElement('div');
document.body.appendChild(canvas);
canvas.className="canvas";
canvas.id='a';

for(var i=1;i<6;i++) {
    var x = document.createElement('div');
    document.getElementById('b').appendChild(x);
    x.className = "color"+i;
}