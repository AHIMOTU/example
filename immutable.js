class CreateStore {
    constructor(target) {
        this.modified = false
        this.target = target
        this.copy = null
    }

    get(key) {
        if (!this.modified) return this.target[key]
        return this.copy[key]
    }

    set(key, value) {}
}

const handler = {
    get(target, key) {
        return target.get(key)
    },
    set(target, key, value) {
        return target.set(key, value)
    }
}

function produce(state, producer) {
    const store = new CreateStore(state)
    const proxy = new Proxy(store, handler)
    producer(proxy)
}

const baseState = [
    { todo: 'Learn typescript', done: true },
    { todo: 'Try immer', done: false },
]

const nextState = produce(baseState, (draftState) => {
    draftState.push({ todo: 'react', done: false })
})

// let arr = [
//     { todo: 'vue', done: true },
//     { todo: 'react', done: false },
// ]
// let handler1 = {
//     get(target, key) {
//         return Reflect.get(target, key)
//     },
//     set(target, key, value) {
//         console.log(key)
//         return Reflect.set(target, key, value)
//     }
// }
// let proxyArr = new Proxy(arr, handler1)
// proxyArr.push({ todo: 'test', done: false })
// proxyArr[1].done = true