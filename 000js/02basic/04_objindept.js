// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "xyz@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Anjeel",
            lastname: "chaudhary"
        }
    }
}

// console.log(regularUser.fullname.userFullname.lastname)
// console.log(regularUser.fullname.userFullname.firstname)

const obj1 = { 1: 'a', 2: 'b', }
const obj2 = { 3: 'a', 4: 'b', }
const obj3 = { 5: 'a', 6: 'b', }


//yaha sakku object hukre merge hu k suruk ola empty ola me jithi 
//yeady suru me empty nai debo ta sara object hukre obj1 me chaljihi 
const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4)

//most used one
const obj5 = { ...obj1, ...obj2, ...obj3 }
// console.log(obj5)


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "b@gmail.com"
    },
    {
        id: 1,
        email: "c@gmail.com"
    },
]

users[1].email
// console.log(users[1].email);
console.log(Object.keys(users));
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
