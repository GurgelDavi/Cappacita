const numeros = [1,2,3,4,5,6,7,8,9,10]

function soma (num1 , num2 ) {
    console.log(num1 + num2)
}
console.log("Função soma")
soma(6, 7)
function numerosPares(array){
    let _numeros = []
    array.forEach(element => {
        if (element%2==0)
            _numeros.push(element);
    });
    return _numeros
}
function numerosPares2(array){
    return array.filter(num => num%2==0)
}
console.log("Método forEach")
console.log(numerosPares(numeros))
console.log("Método filter")
console.log(numerosPares2(numeros))