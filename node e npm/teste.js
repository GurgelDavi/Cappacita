compras = [4,5,6,6,5,0,9,8,7,12]
paForsave = []
for (let i = 0; i < compras.length/3|0; i++) {
    paForsave.push((5+(i-1)*3))
}
sum = 0
compras.sort(function(a,b){return b - a})
console.log(`Oredenado : ${Object.values(compras)} um total de ${compras.length/3|0} e ${Object.values(paForsave)}`);

for (let i = 0; i < compras.length; i++) {
    if (paForsave.includes(i)) console.log(`n some ${compras[i]}`)
    else sum+= compras[i]
}
console.log(sum);