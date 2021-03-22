async function fn1() {
    await new Promise((resolve) => {
        console.log('promise1')
        setTimeout(resolve, 3000)
    })
    console.log('fn1')
}

async function fn2() {
    await new Promise((resolve) => {
        console.log('promise2')
        setTimeout(resolve, 3000)
    })
    console.log('fn2')
}

fn1()
fn2()