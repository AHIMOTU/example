"use strict";
// @ts-ignore
Array.prototype.myMap = function (cb) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        let res = cb(this[i], i, this);
        newArr.push(res);
    }
    return newArr;
};
// @ts-ignore
Array.prototype.myFilter = function (cb) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        let res = cb(this[i], i, this);
        res && newArr.push(this[i]);
    }
    return newArr;
};
// @ts-ignore
Array.prototype.myFind = function (cb) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        let res = cb(this[i], i, this);
        if (res) {
            newArr.push(this[i]);
            break;
        }
    }
    return newArr;
};
const myArr = ['tom', 'maria', 'jack'];
// @ts-ignore
console.log(myArr.myMap(item => `hello, ${item}`));
// @ts-ignore
console.log(myArr.myFilter(item => item.length === 4));
// @ts-ignore
console.log(myArr.myFind(item => item.length === 4));
