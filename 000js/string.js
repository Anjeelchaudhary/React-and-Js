const myName = "Anjeel"
const age = 21

// console.log(`Hello I am ${myName} and I am currently ${age} yrs old`)

const gameName = new String("anjeel-chaudhary-se")
// console.log(gameName)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))


//Substring -does not follow -ve value
const newString = gameName.substring(1, 3)
// console.log(newString)

//slice follows -ve values and it writes it from reverse
const doubleString = gameName.slice(-6, 3)
// console.log(doubleString)

//removing space use trim()
const newString1 = "    anjeel     "
// console.log(newString1.trim())

//.replace(ekarSatta,eolaSe)
const url = "https://anjeel.com/anjeel%10chaudhary"
// console.log(url.replace('%10', '-'))

//.includes = for asking question ki e subject ba ki nai 
// console.log(url.includes('anjeel'))

//makes array
// console.log(gameName.split('-'))