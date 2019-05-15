var c = document.getElementById("mon_canvas");
 var ctx = c.getContext("2d");

 ctx.beginPath();//tete//
 ctx.arc(200,50,30,0,Math.PI*2,false);
 ctx.fillStyle="#976f0f";
 ctx.fill();
 ctx.closePath()

 ctx.beginPath();//oeil droit//
 ctx.arc(190,45,5,0,Math.PI*2,false);
 ctx.fillStyle="#ffffff";
 ctx.fill();
 ctx.closePath()

 ctx.beginPath();//oeil gauche//
 ctx.arc(210,45,5,0,Math.PI*2,false);
 ctx.fillStyle="#ffffff";
 ctx.fill();
 ctx.closePath()

 ctx.beginPath();//bouche bas
    ctx.strokeStyle = "#fa0500";
     ctx.moveTo(185,65);
     ctx.quadraticCurveTo(200,80,215,65,);
     ctx.stroke();
 ctx.closePath();

 ctx.beginPath();//bouche haut
    ctx.strokeStyle = "#fa0500";
     ctx.moveTo(185,65);
     ctx.quadraticCurveTo(200,72,215,65,);
     ctx.stroke();
 ctx.closePath();

 ctx.beginPath();//cil droit//
 ctx.strokeStyle = "#ffffff";
 ctx.moveTo(185,35);
 ctx.quadraticCurveTo(190,30,195,35,);
 ctx.stroke();
ctx.closePath();

ctx.beginPath();//cil gauche//
ctx.strokeStyle = "#ffffff";
ctx.moveTo(205,35);
ctx.quadraticCurveTo(210,30,215,35,);
ctx.stroke();
ctx.closePath();

ctx.beginPath();//bras//
ctx.moveTo(120,85);
ctx.lineJoin = "round";
ctx.lineTo(280,85);
ctx.strokeStyle="#976f0f";
ctx.lineWidth = 20;
ctx.lineCap = "round";
ctx.stroke();
ctx.closePath();

ctx.beginPath();//corp//
ctx.moveTo(150,75);
ctx.fillStyle="#976f0f";
ctx.fillRect(175,75,50,100);
ctx.fill();
ctx.closePath();

ctx.beginPath();//jambe droite//
ctx.moveTo(175,175);
ctx.fillStyle="#976f0f";
ctx.fillRect(175,175,20,50);
ctx.fill();
ctx.closePath();

ctx.beginPath();//jambe gauche//
ctx.moveTo(205,175);
ctx.fillStyle="#976f0f";
ctx.fillRect(205,175,20,50);
ctx.fill();
ctx.closePath();

ctx.beginPath();//entre jambes//
ctx.moveTo(200,175);
ctx.lineJoin = "round";
ctx.lineTo(200,175);
ctx.strokeStyle="#ffffff";
ctx.lineWidth = 10;
ctx.lineCap = "round";
ctx.stroke();
ctx.closePath();

ctx.beginPath();//pied droit//
ctx.arc(185,225,10,0,Math.PI*2,false);
ctx.fillStyle="#976f0f";
ctx.fill();
ctx.closePath()

ctx.beginPath();//pied gauche//
ctx.arc(215,225,10,0,Math.PI*2,false);
ctx.fillStyle="#976f0f";
ctx.fill();
ctx.closePath()

ctx.beginPath();//bouton haut//
ctx.arc(200,120,5,0,Math.PI*2,false);
ctx.fillStyle="#7a2976";
ctx.fill();
ctx.closePath()

ctx.beginPath();//bouton bas//
ctx.arc(200,100,5,0,Math.PI*2,false);
ctx.fillStyle="#7a2976";
ctx.fill();
ctx.closePath()
