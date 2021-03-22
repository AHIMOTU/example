function fn1() {
    let table = ''
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            if (i >= j) table += `${j} * ${i} = ${i*j}\t`        
        }
        table += '\n'
    }
    console.log(table)
}
function fn2(right) {
    const arr =  Array.from({ length: right })
    // const arr =  new Array(right) 有坑
    let str = ''
    arr.forEach((item, index) => {
        str += `${index+1}*${right}=${(index + 1) * right}\t`
    })
    console.log(str)
    if (right === 9) return
    fn2(++right)
}

function fn3() {
    let table = ''
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j <= i; j++) {
            table += (j + "*" + i + "=" + (j * i) + "\t")
        }
        table += '\n'
    }
    console.log(table)
}

fn1()
fn2(1)
fn3()