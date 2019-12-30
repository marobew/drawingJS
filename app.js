const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function onMouseDown(event) {
    painting = true;
}

function startPainting() {
    painting = true;
}

function stopPainting() {
    painting = false;

}

function onMouseUp(event) {
    stopPainting();
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;

}

if (canvas) {
    // mousemove : 마우스 움직임을 감지
    canvas.addEventListener("mousemove", onMouseMove);
    // mousedown : 마우스를 클릭했을 때
    canvas.addEventListener("mousedown", startPainting);
    // mouseup : 마우스를 클릭을 땠을 때
    canvas.addEventListener("mouseup", stopPainting);
    // mouseleave : canvas 밖으로 마우스가 이동했을 때
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));