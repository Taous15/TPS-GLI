
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Form.prototype.paint = function(ctx){
  ctx.beginPath();
  ctx.strokeStyle = this.color;
  ctx.lineWidth = this.line;

}
Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.lineWidth = this.getLine();
    ctx.strokeStyle = this.getColor();

    Form.prototype.paint.call(this,ctx);
    console.log(this.getX() + ' ' + this.getY()+ ' ' +  this.getH()+ ' ' +    this.getW()+ ' ' + this.color + ' ' +this.line);
    
    ctx.beginPath();
    ctx.rect(this.getX() , this.getY() ,   this.getW() , this.getH() );
    ctx.stroke();
  };
  
  Line.prototype.paint = function(ctx) {
    //TODO Manager color
    console.log(this)
    ctx.lineWidth = this.getLine();
    ctx.strokeStyle=this.getColor();
    ctx.beginPath();
    ctx.moveTo(this.getXs(), this.getYs());
    ctx.lineTo(this.getXe(), this.getYe());
    ctx.stroke();
  };
  


  Drawing.prototype.paint = function(ctx,canvas) {
  
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    console.log(this.getForms().length);
    this.getForms().forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
    });
  };
  