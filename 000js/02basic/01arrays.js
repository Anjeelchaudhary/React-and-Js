// const myArray = [0, 1, 2, 3, 4, 5]
// console.log(myArray[0])

// for push 
// console.log(myArray.push(6))
// console.log(myArray)

// for pop
// console.log(myArray.pop())
// console.log(myArray)

//for adding at first
// console.log(myArray.unshift(0))
// console.log(myArray)

//for removing of first element
// console.log(myArray.shift())
// console.log(myArray)

//for checking elemetns in array and it retruns boolean
// console.log(myArray.includes(8))

//yema rahal elemeent k value k index dehat ani nai rahal olan k jun -1 print karat
// console.log(myArray.indexOf(100))



// const myArray2 = new Array(0, 1, 2, 3, 4, 5)
// console.log(myArray2)

//yema join funtion array he string me convert kardehal ba 
// console.log(myArray2.join())


//slice and splice

//slice me last k ola element ola nai lehat ani splice me jun original arrray man se hi xintadehat 
//dehal rahbo ouhai parameter me se

const myNewArray = [0, 1, 2, 3, 4, 5]
console.log("A", myNewArray);

const mynArr = myNewArray.slice(1, 3);
console.log("B", mynArr)

const mynArr2 = myNewArray.splice(1, 3);
console.log("C", myNewArray);
console.log(mynArr2)