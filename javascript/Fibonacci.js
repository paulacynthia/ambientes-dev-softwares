let length = 5;
let a = 0;
let b = 1;

for(let j= 0; j < length; j++) {
    console.log(a + " ");
    let aux = a + b;
    a = b;
    b = aux;
}