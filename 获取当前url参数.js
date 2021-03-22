function fn1(url = '') {
    let obj = {}
    url = url.substring(1)
    console.log(url)
    url.split('&').forEach(item => {
        let arr = item.split('=')
        obj[arr[0]] = arr[1]
    })
    return obj
}
function fn2(url = '') {
    let obj = {}
    url.replace(/([^?&=]+)=([^?&=]+)/g, (match, $1, $2) => {
        obj[$1] = $2
    })
    return obj
}

let url = '?test=1&foo=2' // location.search
console.log(fn1(url))
console.log(fn2(url))