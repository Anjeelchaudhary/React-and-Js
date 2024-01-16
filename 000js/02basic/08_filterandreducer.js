// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// let userBooks = books.filter((bk) => bk.genre === 'History')

// userBooks = books.filter((bk) => {
//     return bk.publish >= 1995 && bk.genre === "History"
// })
// console.log(userBooks);

const bookName = books.filter((pustak) => pustak.publish === 1986)
const bookT = books.filter((pus) => (pus.title === 'Book Four'))
const bookP = books.filter((pustkalay) => { return pustkalay.publish >= 1995 && pustkalay.genre === 'History' })
// console.log(bookP);


//==========================================================================================================================
//map()

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers

    //yaha ek map lagail rahbo oukar answer 2nd ola map me paii  tan add 1 karal ola value filter me jaii
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)

// console.log(newNums);

//==========================================================================================================================
//reduce()
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//reduce() 2 tho parameter lehat suru k parameter k initial value dehek parat jo hamre coma kar k debi
//ani 2nd ola parameter jun array k value rahii
//ani 1st ola parater 2nd cho me 1st ola parameter k ani 2nd ola paramter k result rahihi 

const morTotal = myNumbers.reduce((acc, currVal) => acc + currVal, 0)
// console.log(morTotal);

const shooppingCart = [
    { product: 'Laptop', price: 130000 },
    { product: 'mobile', price: 65000 },
    { product: 'watch ', price: 10000 },
    { product: 'cloth', price: 25000 },
    { product: 'watch', price: 12000 },
]

const totalMoney = shooppingCart.reduce((accu, item) => (accu + item.price), 0)
console.log(totalMoney);