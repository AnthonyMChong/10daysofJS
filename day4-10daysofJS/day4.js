function Rectangle(a, b) {
    var length = a;
    var width = b;
    var perimeter = 2*(a+b);
    var area = a*b;
    var rectInfo = { length , width, perimeter, area}
    return rectInfo
}


function getCount(objects) {
    var equalObjects = 0;
    for (let o = 0; o < objects.length ; o++){
        if (objects[o].x == objects[o].y) {
            equalObjects++;
        }
    }
    return equalObjects
}

function Polygon(dimensions) {
    this.perimeter = function () {
        let p = 0
        for (let o = 0; o < dimensions.length; o++) {
            p += dimensions[o]
        }
        return p
    }
}


const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
console.log(Rectangle(4,5))

