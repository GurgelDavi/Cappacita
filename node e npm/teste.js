compras = [7,8,5,10,2,5,10,4]
minNum = []
maxNum = []
sum =0
compra = 0

compras.sort(function(a,b){return b - a})
console.log(`Oredenado : ${Object.values(compras)} um total de ${compras.length/3|0}`);

for (let i = 0; i < compras.length; i++) {
    if(i==(i-1)*3) {
        console.log(`NãoSomou ${compras[i]} pos ${i}`);
    }else {
        sum+=compras[i]
    }
    
}
console.log(sum);