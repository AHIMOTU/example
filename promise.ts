/**
 * Promise/A+
 * 
 * 1、Promise 是一个类，类中需要传一个 executor ，默认会立即执行；
 * 2、Promise 内部会提供两个方法（不是原型对象上的），这两个方法会传给用户，可以更改 Promise 状态；
 * 3、Promise 有三个状态：PENDING, RESOLVED, REJECTED；
 * 4、Promise 只会从等待变为成功或从等待变为失败；
 * 5、每个 promise 实例上都要有一个 then 方法，参数分别是成功和失败的回调；
 * 
 * 链式调用
 * 
 * 6、then 方法返回的必须是一个 promise，这样才能保证链式调用；
 * 7、如果 then 内部的回调函数执行结果依然是一个 promise，那就把这个 promise 的结果resolve出去；
 * 8、任何一个 promise 必须是 resolve 之后才能走到它的 then 方法，从而创建下一个的 promise；
 * 9、什么时候走成功的回调？ then 中返回一个普通值或者一个成功的 promise；
 * 10、什么时候走失败的回调？then 中返回一个失败的 promise 或者抛出异常；
 */

 interface ExecutorFunc {
    (resolve: any, reject: any): any
 }
 interface FulfilledFunc {
    (value: any): any
 }
 interface RejectedFunc {
    (reason: any): any
 }

 const PENDING = 'pending'
 const RESOLVED = 'resolved'
 const REJECTED = 'rejected'

 class Promise_ {
    status: String
    value: any // resolve(value)
    reason: any // reject(reason)
    onResolvedCbs: Array<() => void> // 存放成功的回调函数
    onRejectedCbs: Array<() => void> // 存放失败的回调函数

    static resolve: (value: any) => Promise_
    static reject: (reason: any) => Promise_

    constructor(executor: ExecutorFunc) {
        this.status = PENDING
        this.value = undefined
        this.reason = undefined
        this.onResolvedCbs = []
        this.onRejectedCbs = []
        const resolve = (value: any) => {
            if (this.status === PENDING) {
                this.value = value
                this.status = RESOLVED
                this.onResolvedCbs.forEach(fn => fn())
            }
        }
        const reject = (reason: any) => {
            if (this.status === PENDING) {
                this.reason = reason
                this.status = REJECTED
                this.onRejectedCbs.forEach(fn => fn())
            }
        }

        executor(resolve, reject)
    }

    then(onFulfilled: FulfilledFunc | null, onRejected?: RejectedFunc) {
        // 为了实现链式调用，创建一个新的 promise
        // 执行 then 中的回调，返回的可能是一个普通值，也可能是一个 promise ，如果是 promise 的话则需要让这个 promise 执行
        // 使用宏任务把代码放到下一次执行，这样就可以取到 promise2，否则取到的是 undefined
        let promise2 = new Promise_((resolve, reject) => {
            if (this.status === RESOLVED) {
                setTimeout(() => {
                    let x = onFulfilled!(this.value)
                    resolvePromise(promise2, x, resolve, reject)
                }, 0)
            }
            if (this.status === REJECTED) {
                setTimeout(() => {
                    let x = onRejected!(this.reason)
                    resolvePromise(promise2, x, resolve, reject)
                }, 0)
            }
            // 说明 executor 是异步的
            if (this.status === PENDING) {
                // AOP
                this.onResolvedCbs.push(() => {
                    setTimeout(() => {
                        let x = onFulfilled!(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    }, 0)
                })
                this.onRejectedCbs.push(() => {
                    setTimeout(() => {
                        let x = onRejected!(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    }, 0)
                })
            }
        })
        return promise2
    }

    catch(onRejected: RejectedFunc) {
        return this.then(null, onRejected)
    }
 }

 Promise_.resolve = function (value) {
    return new Promise_((resolve, reject) => {
        resolve(value)
    })
 }

 Promise_.reject = function (reason) {
     return new Promise_((resolve, reject) => {
         reject(reason)
     })
 }

 function resolvePromise(promise2: any, x: any, resolve: (value: any) => void, reject: (reason: any) => void) {
    if (typeof x === 'object' && x !== null) {
        let then = x.then
        if (typeof then === 'function') { // x 为一个 promise
            then.call(x, (v: any) => {
                resolvePromise(promise2, v, resolve, reject)
            }, (r: any) => {
                reject(r)
            })
        } else {
            resolve(x)
        }
    } else {
        resolve(x)
    }
 }

 // 测试代码
 new Promise_((resolve, reject) => {
    resolve('success')
 })
 .then((value) => {
    console.log(value)
    // return new Promise_((resolve_, reject_) => {
    //     resolve_(value)
    // })
    return value
})
 .then((value) => {
    console.log(value)
})
.then((value) => {
    console.log(value)
})

new Promise_((resolve, reject) => {
    reject('fail')
}).catch((reason) => {
    console.log(reason)
})

Promise_.resolve('111').then((value) => {
    console.log(value)
})

Promise_.reject('222').catch((reason) => {
    console.log(reason)
})