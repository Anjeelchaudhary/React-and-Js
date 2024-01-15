const { ListSearchIndexesCursor } = require("mongodb")

const arr = [1, 2, 3, 4, 2, 7, 5]
for (const i of arr) {
    // console.log(`arrsy : ${i}`)
}

const greet = "Hello anjeel chaudhary"
for (const i of greet) {
    // console.log(`greet : ${i}`)
}

//maps 
const map = new Map()
map.set('np', 'Nepal')
map.set('jrmn', 'Germany')
map.set('in', 'India')
// console.log(map)

for (const [key, value] of map) {
    // console.log(key, '-', value)
}

const objects = {
    'game1': 'pubg',
    'game2': 'cod'
}

//nor working in objects for forof loop
// for (const [key, value] of objects) {
//     console.log(key, '-', value)
// }

//objects me iterate karek lak forin loop lagaibo 
const newObjects = {
    'jv': 'java',
    'nd': 'ndoe',
    'js': 'javascript',
    'rb': 'ruby',
    'c': 'c programming'
}
for (const i in newObjects) {
    // console.log(`${i} is ${newObjects[i]}`)
}


// ==========================================================
// array he iterate kare bela forin loop forin ola loop nai lagaibanat
// kahe ki forin ola loops key nikaratt jo array k key me 0,1,2,3
//aisin output data ait tabe array ani map me forof ola loop lena 

//objects me kux vi key dar k kux vi value dare banat tabe forin loop majja se
//lagaibanat interate kare bela

//====================================================================

//ojbects me forin loop
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut of ${myObject[key]}`);
}
//ema value he nikareklak objectname[aniYahaConst me banail ola variabel]
//ani key he nikarek lak jun sidda for in me banail ola const k variable nau likhna

//=========================================================================
//sab se bawal foreach loop
const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

//for each loop me 3 parameter pass huit jama 1st ola key rahat 2nd ola index number rahat ani 3rd ola jun jammu array rahat


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {

    console.log(item.languageName);
})