
function sleep () {
    new Promise((resolve) => {
        setTimeout(() => {
            console.log('sleep1')
            resolve()
        }, 3000);
    })
    console.log('sleep2')
}

async function fn1 () {
    await sleep()
    console.log('fn1')
}

function fn2 () {
    console.log('fn2')
}

const mixins = [fn1, fn2]

mixins.forEach(fn => {
    fn()
})