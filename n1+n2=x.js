function fn1 (arr, x) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        const n1 = arr[i]
        const n2 = x - n1
        if (obj[n2]) {
            return [n1, n2]
        } else {
            obj[n1] = n1
        }
    }
}

function fn2 (arr, x) {
    let res = []
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        const n1 = arr[i]
        const n2 = x - n1
        if (obj[n2]) {
            res.push([ n1, n2 ])
        } else {
            obj[n1] = n1
        }
    }
    return res
}

const arr = [1, 2, 3, 4, 5]
console.log(fn1(arr, 6));
console.log(fn2(arr, 6));