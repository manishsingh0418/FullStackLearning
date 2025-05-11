class Circle{
    constructor(radius){
        this.radius = radius;
    }
    getArea(){
        return Math.PI * this.radius * this.radius;
    }   
}
const circle = new Circle(10);
console.log(circle.getArea());