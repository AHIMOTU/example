function count(val) {
    if (val > 1) {
        return val * count(val - 1)
    }
    return 1
}

console.log(count(3))
console.log(count(6))