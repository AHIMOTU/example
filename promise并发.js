// https://segmentfault.com/a/1190000020175627
const axios = {}
axios.request = function request(config) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(config), Math.random() * 1500 + 1000)
    })
}

const MAX = 3
let pool = []
let other = []

function request(config) {
    if (pool.length < MAX) {
        const p = axios.request(config)
        pool.push(p)
        p.then(data => {
            return data
        })
    } else {
        other.push(config)
    }
}