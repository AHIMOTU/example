function deepCopy(obj) {
    let newObj = obj instanceof Array ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' && obj[key] !== null ? deepCopy(obj[key]) : obj[key]
        }
    }
    return newObj
}

let test = {
    a: 1,
    b: {
        foo: [1, 3]
    },
    c: null
}
// let test2 = test
let test2 = deepCopy(test)
test2.a = 2
console.log(test)
console.log(test2)