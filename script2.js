var c = document.getElementById("mon_canvas");
 var ctx = c.getContext("2d");

 ctx.beginPath();//vitre navette
     ctx.fillStyle = "#ffffff";
     ctx.moveTo(150,150);
     ctx.quadraticCurveTo(200,0,250,150);
     ctx.fill();
 ctx.closePath();

 ctx.beginPath();//soucoupe
    ctx.fillStyle = "#e0e1f3";
     ctx.moveTo(100,150);
     ctx.quadraticCurveTo(200,100,300,150);
     ctx.fill();
 ctx.closePath();

 ctx.beginPath();//soucoupe bas
    ctx.fillStyle = "#e0e1f3";
     ctx.moveTo(300,150);
     ctx.quadraticCurveTo(200,200,100,150);
     ctx.fill();
 ctx.closePath();
