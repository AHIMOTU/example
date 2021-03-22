function fn1(arr = []) {
    return Math.max(...arr) - Math.min(...arr)
}
function fn2(arr = []) {
    let arr2 = arr.sort()
    return arr2[arr2.length - 1] - arr2[0]
}
const data = [3, 2, 8, 1, 7]
console.log(fn1(data))
console.log(fn2(data))