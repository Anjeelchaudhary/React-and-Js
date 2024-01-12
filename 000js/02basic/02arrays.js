const heros = ['Ironman', 'Spiderman', 'Thor']
const dcHeros = ['superman', 'batman', 'flash']


//not good practice to merge two arrays
// heros.push(dcHeros)
// console.log(heros)

//ekar output
// [ 'Ironman', 'Spiderman', 'Thor', [ 'superman', 'batman', 'flash' ] ]

//yeady aisik karfedelo taa kaisik flas he lena 
// console.log(heros[3][2])

const allHeros = heros.concat(dcHeros)
console.log(allHeros)