var myCanvas = document.getElementById("myCanvas");
var conText = myCanvas.getContext("2d");

setInterval(run, 100);

nhanVat = {
    x : 100,
    y : 100
}

function run() {
    conText.clearRect(0, 0, 300, 600)
    conText.fillStyle = "red";
    conText.fillRect(nhanVat.x, nhanVat.y, 20, 20);
    // nhanVat.y += 5;
}

document.addEventListener("keydown", key => {
    switch(key.keyCode) {
        case 37:
            nhanVat.x -= 5;
            break;
        case 38:
            nhanVat.y -= 5;
            break;
        case 39:
            nhanVat.x += 5;
            break;
        case 40:
            nhanVat.y += 5;
            break;
    }
})
