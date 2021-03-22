function fn1(arr = []) {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    return { max, min }
}

function fn2(arr = []) {
    const max = arr.reduce((total, current) => total = total > current ? total : current)
    const min = arr.reduce((total, current) => total = total < current ? total : current)
    return { max , min }
}

let arr = [23, 1, 22, 12, 3]

console.log(fn1(arr))
console.log(fn2(arr))