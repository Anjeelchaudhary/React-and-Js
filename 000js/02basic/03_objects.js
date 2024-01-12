//singleton
//constructor se banal object singleton hi banat

const mySymbol = Symbol("key1")

// Object literls
const JsUser = {
    name: 'Anjeel',
    "full name": 'Anjeel chaudhary',
    [mySymbol]: 'mykey1',
    age: 22,
    location: 'Nepal',
    email: 'anjeel@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.name)
// console.log(JsUser["full name"]) //accessing with space in key
// console.log(JsUser.email)
// // console.log(JsUser[email]) //wrong way to access ,string howai kaye k bataik parat
// console.log(JsUser["email"]) //right way to access

//yaha mySymbol k value to mykey1 ai mano reference Symbol("key1") he kari
// console.log(JsUser[mySymbol])

//replacing value
JsUser.email = "abc.@gmail.com"
// Object.freeze(JsUser) //freeze karat ab changes nai kar bani
JsUser.email = "xyz.@gmail.com"
// console.log(JsUser)

JsUser.greeting = function () {
    console.log("Hello anjeel");
}

JsUser.greetingTwo = function () {
    console.log(`Hello ${this.name} welcome to js`);
}


console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())