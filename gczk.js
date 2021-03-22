const str1 = ``

const str2 = `涿州市LJH	S000010
北京市GJ	S000203
介休市BJW	S000216
江北区YB	S000915
蚌埠市JSB	S000921
永康市YWH	S000944
合肥市FP	S001011
长乐市CYG	S001104
杭州市HSH	S001217
济南市YYD	S001435
十堰市SQS	S001769
襄阳市WZG	S001789
珠海市WWW	S001944
赣州市PGC	S002126
青岛市LW	S002151
柳州市LJM	S002386
泸州市OB	S002537
丹阳市LFR	S002647
万盛区ZZY	S003165
忻州市LGH	S003568
晋宁县CGF	S003688
广州欧盈	S004263
京峰	S005006
云南信洛	S005276
上海续合	S005277
金利安	S005278
苏州无相	S005279
成都建臻	S005319
陕西欧木	S005321
秦皇岛邦耀	S005322
南昌正标	S005323
云南美心	S005324
浙江嘉宏	S005325
杭州誉融	S005326
济南爱莫莉	S005327
重庆新震丰	S005328
武汉四象瀚合	S005329
徐州和福	S005647`

const arr2 = str2.replace(/\t(.*)\n/g, ' ').split(' ')

arr2.forEach(item => {
    if (str1.includes(item)) {
        console.log(item)
    }
})