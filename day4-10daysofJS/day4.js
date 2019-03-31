function Rectangle(a, b) {
    var length = a;
    var width = b;
    var perimeter = 2*(a+b);
    var area = a*b;
    var rectInfo = { length , width, perimeter, area}
    return rectInfo
}

console.log(Rectangle(4,5))