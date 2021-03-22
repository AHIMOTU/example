function count() {
    const now = new Date()
    const currentYear = now.getFullYear()
    const target = new Date(currentYear + 1, 0, 1)

    return Math.floor((target - now) / (1000 * 60 * 60 * 24))
}

console.log(count())