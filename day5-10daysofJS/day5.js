class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function () {
    return (this.w * this.h);
}

class Square extends Rectangle{
    constructor(w) {
        super(w , w)
    }
}

function sides(literals, ...expressions) {
    var exparray = [expressions[0], expressions[1]]
    var area = expressions[0] * expressions[1]
    for (let x = 0; x < exparray.length; x++){
        console.log((expressions[x] + Math.sqrt(expressions[x] ** 2 - 16 * area))/4)
        expressions[x] = (expressions[x] + Math.sqrt(expressions[x] ** 2 - 16 * area))/4
    }
    console.log(expressions[0])
    return (exparray.sort());
}


/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

const rec = new Rectangle(3, 4);
const sqr = new Square(3);

console.log(rec.area());
console.log(sqr.area());

let s1 = 10;
let s2 = 14;
const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
console.log(sqr.area());


// if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify([ 'constructor' ])) {
//     const rec = new Rectangle(3, 4);
//     const sqr = new Square(3);
    
//     console.log(rec.area());
//     console.log(sqr.area());
// } else {
//     console.log(-1);
//     console.log(-1);
// }