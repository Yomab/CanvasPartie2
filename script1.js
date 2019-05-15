var c = document.getElementById("mon_canvas");
 var ctx = c.getContext("2d");

 ctx.beginPath();
    // triangle
    ctx.fillStyle = "#aa6522";
    ctx.moveTo(150, 150); // coté gauche départ triangle
    ctx.lineTo(250, 150); // tracé vers la gauche
    ctx.lineTo(200, 300); // tracé gauche vers bas
    ctx.fill(); //  jonction triangle
    ctx.closePath();
    // boule de glace
ctx.beginPath();
    ctx.fillStyle = "#8a0908";
    ctx.moveTo(150,150);
    ctx.quadraticCurveTo(200,0,250,150);
    ctx.fill();
