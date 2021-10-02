class Rectange {
    constructor(x, y,width, height) {
        this.x = x;
        this.y = y;
        this.width =width;
        this.height =height;
        this.area = function () {
            return this.width * this.height;
        }
        this.perimeter = function () {
            return 2*(this.width + this.height);
        }
    }
}
var rectange= new Rectange(0,0,100,40);
function createRectange(){
    var ctx = document.getElementById("myCanvas").getContext("2d");  
    ctx.fillStyle = "#00ffff";
    ctx.fillRect(rectange.x,rectange.y,rectange.width,rectange.height);
    
    
}
createRectange();
document.write(`<br> Diện tích: ${rectange.area()} <br>  Chu vi: ${rectange.perimeter()} `);



