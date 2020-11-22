
// Implémenter ici les 4 classes du modèles
// N'oubliez pas l'héritage !
function Drawing(){
    this.form = new Array();

    this.addForm=function(form) {
        this.form.push(form);
    }.bind(this);

    this.getForms = function(){
        return this.form;
    }.bind(this);

};

function Form(color, line){
    this.color = color;
    this.line = line;

    this.getLine = function(){
        return this.line;
    }.bind(this);


    this.getColor = function(){
        return this.color;
    }.bind(this);
};

function Rectangle(x, y, w, h, line, color ){
    Form.call(this, line, color );
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.getX = function(){
        return this.x;
    }.bind(this);


    this.getY = function(){
        return this.y;
    }.bind(this);


    this.getH = function(){
        return this.h;
    }.bind(this);


    this.getW = function(){
        return this.w;
    }.bind(this);

    this.getLine = function(){
        return this.line;
    }.bind(this);


    this.getColor = function(){
        return this.color;
    }.bind(this);

};
Rectangle.prototype = new Form();


function Line(xs, ys ,xe, ye, line, color){
    Form.call(this,color, line );
    this.xs = xs;
    this.ys = ys;
    this.xe = xe;
    this.ye = ye;

    this.getXs = function(){
        return this.xs;
    }.bind(this);

    this.getYs = function(){
        return this.ys;
    }.bind(this);

    this.getXe = function(){
        return this.xe;
    }.bind(this);

    this.getYe = function(){
        return this.ye;
    }.bind(this);

    this.getColor = function(){
        return this.color;
    }.bind(this);

    this.getLine = function(){
        return this.line;
    }.bind(this);
};
Line.prototype = new Form();
