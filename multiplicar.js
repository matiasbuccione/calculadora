let multiplicar = (n1, n2) => {
    if(n1=== 0 || n2 === 0){
        return 0;
    }
    return n1 * n2;
}

console.log(multiplicar(0,50));


module.exports = multiplicar;

