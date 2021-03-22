// 7/18 3、写一个洗扑克牌的算法。

function fn (): Array<string> {
    const data = [...'A23456789JQK'.split(''), 10]
    const poker = data.reduce((total, cur) => (total as any).concat([`♥${cur}`, `♦${cur}`, `♠${cur}`, `♣${cur}`]), [])
    console.log(poker.join())

    let len = poker.length
    while(len) {
        let index = Math.floor(Math.random() * (len - 1));
        [poker[len - 1], poker[index]] = [poker[index], poker[len - 1]]
        len--
    }

    return poker
}

console.log(fn().join())