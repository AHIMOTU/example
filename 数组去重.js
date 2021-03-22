function flat(arr = [], target = []) {
    arr.forEach(item => {
        if (Array.isArray(item)) {
            fn1(item, target)
        } else {
            target.push(item)
        }
    })
    return target
}

function fn1(arr) {
    let data = flat(arr)
    return [...new Set(data)]
}

function fn2(arr) {
    let data = flat(arr)
    let value = []
    data.forEach(d => {
        if (value.indexOf(d) === -1) {
            value.push(d)
        } 
    })
    return value
}

let arr = [
    0,
    1,
    [1, 2, 3],
    { foo: '123'},
    { foo: '123'}
]
console.log(fn1(arr))
console.log(fn2(arr))