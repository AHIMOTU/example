function fn (str) {
    let stack = []
    for (let s of str) {
        if (s === '{') {
            stack.push(s)
        } else if (s === '}') {
            if (stack.length === 0) {
                return false
            } else {
                stack.pop()
            }
        }
    }

    return stack.length === 0
}

console.log(fn('{}}'))
console.log(fn('{}'))