const path = require('path')

function Person () {
    this.name = '张湘'
    this.age = 23
}
Person.prototype.say = function () {
    return 'hello'
}
let user1 = new Person()
console.log(user1)
console.log(user1.say())

function create () {
    let obj = {}
    let Constructor = [].shift.call(arguments)
    Constructor.apply(obj)
    obj.__proto__ = Constructor.prototype
    return obj
}
let user2 = create(Person)
console.log(user2)
console.log(user2.say())

console.log(path.join('a', 'b'))
console.log(path.resolve('a', '/b'))
console.log(path.resolve('a', 'b'))