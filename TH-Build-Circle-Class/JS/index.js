class Circle {
    constructor(radius){
        this.radius = radius;
        this.getRadius = function() {
            return radius;
        }
        this.getArea = function () {
            return Math.floor(Math.PI*radius**2);
        }
        this.getRadius = function() {
            return radius;
        }
    }
}
let circle = new Circle(2)
let radius = circle.getRadius();
let area = circle.getArea();
alert("radius: " + radius + "; area: " + area);