// binary search
// computation complexity: O(log(n))
// memory complexity: O(1) + O(n) = O(n)
import { strict as assert } from 'node:assert';
const binarySearch = (arr: number[], item: number) => {

    let start = 0
    let end = arr.length - 1

    while (start <= end){

        const middle = Math.floor((end + start) / 2)

        // console.log('start', start, 'end', end, 'middle', middle)

        const middleItem = arr[middle]

        if (middleItem === item){
            return middle
        }
        if (middleItem < item){
            start = middle + 1
        }
        if (middleItem > item){
            end = middle - 1
        }
    }
    return null
}

assert.equal(binarySearch([1,10,100,1000,10000], 1) , 0)
assert.equal(binarySearch([1,10,100,1000,10000], 10) , 1)
assert.equal(binarySearch([1,10,100,1000,10000], 10000) , 4)
assert.equal(binarySearch([1,10,100,1000,10000], 999) , null)
assert.equal(binarySearch(Array.from({length: 100}, (_, i) => i + 1), 77), 76)
assert.equal(binarySearch([], 99), null)



