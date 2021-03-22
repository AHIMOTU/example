function sleep (time: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}

void async function main () {
    console.log(1)
    await sleep(3000)
    console.log(2)
}()