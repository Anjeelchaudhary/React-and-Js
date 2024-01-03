//dates
const newDate = new Date();
// console.log(newDate)
// console.log(newDate.toLocaleDateString())
// console.log(newDate.toString())
// console.log(newDate.toDateString())

//newDate k type yaha object ho
// console.log(typeof newDate)


//javascript me month 0 se start huith kahe ki aisike array ganjait comma se
// let myCreatdDate = new Date(2023, 0, 1)
// yaha par double quote lagail batu to yaha month 1 se start hui
let myCreatdDate = new Date("2023-01-23")
// console.log(myCreatdDate.toLocaleDateString())

//quiz, poles , kihin fastest anser dehal ba to  oukin winner banau
//atna bela timestam method use karna 
let myTimeStamp = Date.now()
// console.log(myTimeStamp)