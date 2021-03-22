function compose(...fn) {
    return fn.reduce((total, current) => {
        console.log(total)
        console.log(current)
        return (...args) => total(current(args))
    })
}

const test = num => num
const add = num => num + 10
const mutipy = num => num * 2

const res = compose(mutipy, add, test)
console.log(res.toString())
res(5)

console.log(mutipy(add(test(5))))