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
    var area = expressions[0]
    var perimeter =   expressions[1]
    // console.log(exparray)
    // console.log(area , perimeter)
    exparray[0] = (perimeter + Math.sqrt(((perimeter) ** 2) - 16 * area))/4
    exparray[1] = (perimeter - Math.sqrt(((perimeter) ** 2) - 16 * area))/4
    // console.log((expressions[x] + Math.sqrt(expressions[x] ** 2 - 16 * area))/4)
    // console.log(exparray[x])
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
console.log(sqr.area());
const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
console.log([x,y])


// if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify([ 'constructor' ])) {
//     const rec = new Rectangle(3, 4);
//     const sqr = new Square(3);
    
//     console.log(rec.area());
//     console.log(sqr.area());
// } else {
//     console.log(-1);
//     console.log(-1);
// }