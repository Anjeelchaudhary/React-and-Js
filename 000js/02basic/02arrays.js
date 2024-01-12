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
// console.log(allHeros)

// also good way 
const all_naya_heros = [...heros, ...dcHeros]
// console.log(all_naya_heros)

//ekin ekke array me add karebela
const new_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const nNew_Array = new_Array.flat(Infinity)
// console.log(nNew_Array)

//output
// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]


//yi mor nau he array me convert kedehat 
console.log(Array.from("Anjeel"))