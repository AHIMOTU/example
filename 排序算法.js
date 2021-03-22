// https://www.runoob.com/w3cnote/ten-sorting-algorithm.html

// 冒泡排序
function bubbleSort (target = []) {
    let result = [...target]
    for (let i = 0; i < result.length - 1; i++) { // 冒泡次数
        for (let j = 0; j < result.length - 1 - i; j++) { // 每次冒泡比较的元素个数
            if (result[j] > result[j+1]) {
                // let temp = result[j+1]
                // result[j+1] = result[j]
                // result[j] = temp
                [result[j], result[j+1]] = [result[j+1], result[j]]
            }
        }
    }
    return result
}

// 选择排序
function selectionSort (target = []) {
    let result = [...target]
    let minIndex
    for (let i = 0; i < result.length - 1; i++) { // 循环n次，找出n个最小值
        minIndex = i
        for (let j = i + 1; j < result.length; j++) { // 找到未排序序列中最小值的下标
            if (result[j] < result[minIndex]) {
                minIndex = j
            }
        }
        [result[minIndex], result[i]] = [result[i], result[minIndex]] // 放到未排序序列的首部
    }
    return result
}

// 插入排序
function insertionSort (target = []) { // 类似于洗扑克牌
    let result = [...target]
    let preIndex, current
    for (let i = 1; i < result.length; i++) {
        preIndex = i - 1
        current = result[i] // current之前的是已排序序列，将current插入到已排序序列
        while (preIndex >= 0 && result[preIndex] > current) { // 将curren插入到比它大的preIndex的前面
            result[preIndex + 1] = result[preIndex]
            preIndex--
        }
        result[preIndex + 1]  = current
    }
    return result
}

// 归并排序
function mergeSort (target = []) { // 自上而下
    let result = [...target]
    if (result.length < 2) return result
    let middle = Math.floor(result.length / 2)
    let left = result.slice(0, middle)
    let right = result.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}
function merge (left, right) {
    let result = []
    while (left.length && right.length) { // 指针分别指向第一个元素，小的一方推到result中，指针后移，直到一方为空
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    while (left.length) { // 将不为空的一方直接推入result
        result.push(left.shift())
    }
    while (right.length) {
        result.push(right.shift())
    }
    return result
}

// 快速排序 [4, 5, 3, 1, 2, 3, 7]
function quickSort (result = [], begin = 0, end = result.length - 1) {
    if (begin >= end) return
    // let result = [...target]
    let lp = begin
    let rp = end
    let pivot = result[begin]
    while (lp < rp) {
        while (result[rp] > pivot && lp < rp) {
            rp--
        }
        result[lp] = result[rp]
        // console.log(lp, rp, result)
        lp++
        while (result[lp] < pivot && lp < rp) {
            lp++
        }
        result[rp] = result[lp]
        // console.log(lp, rp, result)
        rp--
    }
    // console.log(lp, rp)
    result[lp] = pivot
    // console.log(result)
    quickSort(result, begin, lp - 1)
    quickSort(result, rp + 1, end)
    return result
}

// 计数排序（每一个桶只存单一的键值）
function countingSort (arr, maxValue) {
    let bucket = new Array(maxValue + 1) // 桶的i表示arr的元素，桶的值表示计数
    let sortIndex = 0

    for (let i = 0; i < arr.length; i++) {
        if (!bucket[arr[i]]) {
            bucket[arr[i]] = 0
        }
        bucket[arr[i]]++
    }

    for (let i = 0; i < bucket.length; i++) {
        while (bucket[i] > 0) {
            arr[sortIndex++] = i
            bucket[i]--
        }
    }

    return arr
}

// 桶排序（每一个桶存储一定范围内的数值）
function bucketSort (arr, bucketSize = 5) {
    const maxValue = Math.max(...arr)
    const minValue = Math.min(...arr)
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
    let buckets = new Array(bucketCount)

    for (let i = 0; i < buckets.length; i++) { // 初始化每个桶
        buckets[i] = []
    }

    for (let i = 0; i < arr.length; i++) { // 将元素放入对应桶中
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i])
    }

    arr.length = 0
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = insertionSort(buckets[i]) // 对每个桶内的元素进行排序（插入排序）
        for (let j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j])
        }
    }

    return arr
}

// 基数排序（根据元素的位数来分配桶）
function radixSort (arr, maxDigit = 1) {
    let buckets = []
    let mod = 10
    let dev = 1
    for (let i = 0; i < maxDigit; i++, mod *= 10, dev *= 10) {
        for (let j = 0; j < arr.length; j++) {
            const key = Math.floor(arr[j] % mod / dev)
            if (!buckets[key]) {
                buckets[key] = []
            }
            buckets[key].push(arr[j]) // 将元素放入对应桶中
        }
        arr.length = 0
        for (let m = 0; m < buckets.length; m++) {
            if (buckets[m]) {
                for (let n = 0; n < buckets[m].length; n++) {
                    arr.push(buckets[m][n])
                }
            }
        }
        buckets = [] // 每一位的处理完后，将桶初始化
    }
    return arr
}

const target = [4, 52, 3, 16, 22, 13, 7, 100]
// const target = [3, 1, 2, 3]
// console.log(bubbleSort(target))
// console.log(selectionSort(target))
// console.log(insertionSort(target))
// console.log(mergeSort(target))
// console.log(quickSort([...target]))
// console.log(countingSort(target, 6))
// console.log(bucketSort(target))
console.log(radixSort(target, 3))
