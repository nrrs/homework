document.addEventListener("DOMContentLoaded", function(){
  let canvas = document.getElementById('mycanvas');

  canvas.width = 500;
  canvas.height = 500;

  let ctx = canvas.getContext('2d');

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 300, 300);

  ctx.beginPath();
  ctx.arc(150, 150, 130, 50, 0, 2 * Math.PI);
  ctx.lineWidth = 10;
  ctx.strokeStyle = "whitesmoke";
  ctx.stroke();
  ctx.fillStyle = "whitesmoke";
  ctx.fill();
  // ctx.strokeStyle = "white";
  // ctx.beginPath();
  // ctx.arc(75, 75, 50, 0, 2 * Math.PI);
  // ctx.stroke();

});
