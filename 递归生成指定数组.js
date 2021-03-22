// 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值

function fn(arr = []) {
    let val = Math.floor(Math.random() * 31 + 2)
    if (arr.length < 5) {
        if (arr.indexOf(val) !== -1) {
            val = Math.floor(Math.random() * 31 + 2)
        }
        arr.push(val)
        fn(arr)
    }
    return arr
}
console.log(fn())