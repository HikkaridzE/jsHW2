function int(x) {
    return function(y) {
        return x + y;
    };
}

let x = 1;
let y = 10;

console.log(int(x)(y));
