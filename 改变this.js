var value = 1
let foo = {
    value: 2
}
function bar (name, age) {
    this.habit = 'football'
    console.log(this.value)
    console.log('name: ' + name)
    console.log('age: ' + age)
    // return 'value = ' + this.value 
}
bar.prototype.value = 'test'
console.log(bar())
console.log(bar.call(foo))

// call
Function.prototype.myCall = function (context) {
    context.fn = this
    let args = [...arguments].slice(1)
    let res = context.fn(args)
    delete context.fn
    return res
}
console.log(bar.myCall(foo))
// apply
Function.prototype.myApply = function (context) {
    context.fn = this
    let args = [...arguments][1]
    let res = context.fn(args)
    delete context.fn
    return res
}
console.log(bar.myApply(foo))
// bind
Function.prototype.bind = function (context) {
    let _this = this
    let args1 = Array.prototype.slice.call(arguments, 1)
    let fn = function () {
        let args2 = Array.prototype.slice.call(arguments)
        return _this.apply(this instanceof fn ? this : context, [...args1, ...args2])
    }
    fn.prototype = this.prototype
    return fn
}
// instanceof
function _instanceof(L, R) {
    R = R.prototype
    L = L.__proto__
    while (true) {
        if (L === null) return false
        if (L === R) return true
        L = L.__proto__
    }
}

console.log(_instanceof([], Array))
// console.log(bar.bind(foo, 'zhangxiang')(23))
// let Parent = bar.bind(foo, 'zhangxiang')
// let b = new Parent(23)
// console.log(b.habit)
// Parent.prototype.value = '案例的开发'
// console.log(b.value)
