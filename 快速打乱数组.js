let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function fn1(arr = []) {
    let arr1 = arr.slice()
    return arr1.sort(() => {
        return Math.random() > 0.5 ? 1 : -1
    })
}

function fn2() {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let len = arr.length
    while(len){
        let idx = Math.floor(Math.random() * (len - 1)); // 注意此处需要 ;
        [arr[len -1], arr[idx]] = [arr[idx], arr[len - 1]]
        len--
    }
    return arr
}

console.log(fn1(arr1))
console.log(fn2())