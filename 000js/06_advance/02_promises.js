// new Promise(function (haKardem, naikarnuu) { })

//syntax one
const promishOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("I am promis One")
        resolve()
    }, 1000)
})
promishOne.then(function () {
    console.log("promis one k resolve huitu na")
})

//syntax Two
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("I am promise two")
        resolve()
    }, 1000)
}).then(() => {
    console.log("promis two k resolve huitu na")
})

//data passing karatu through resolve k madat se 
//resolve me chahe jab objject pass huit na ani ou {} aisin k vittar rahat
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("I am promise three")
        resolve({ username: "anjeel", email: "anjeel@example.com" })
    }, 1000)
})

//ahte par then me kux vi variable rahi mai for eg k lak user lehatu hna 
//maja ola format .then new line me likhal maja for extrating fastly 
promiseThree
    .then((user) => {
        console.log(user)
        return user.username
    })
    .then((userName) => console.log(userName))

new Promise((resolve, reject) => {
    setTimeout(() => {
        const descision = false
        if (!descision) {
            console.log("I am promise four")
            resolve()
        } else {
            console.log("something went wrong")
            reject()
        }
    }, 1000)
})
    .then(() => {
        console.log("I am true")
    })
    .catch(() => console.log("i am false"))