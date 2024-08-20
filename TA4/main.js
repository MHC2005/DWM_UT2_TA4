function sumAll(a, b){
    let suma = 0;
    for(let i = a; i <= b; i++){
        suma += i;
    }
    return suma;
}

console.log(sumAll(1,4));
console.log(sumAll(1,10));
console.log(sumAll(2,4));