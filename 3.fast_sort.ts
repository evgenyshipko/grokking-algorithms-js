// quick sort
// computation complexity: O(n*log(n))
// memory complexity: O(n*log(n))
import { strict as assert } from 'node:assert';
export const fastSort = (arr: number[]) => {
    if (arr.length < 2){
        return arr
    }
    const base = arr[0]
    const lessThan = arr.filter(item => item < base)
    const moreThan = arr.filter(item => item > base)
    return [...fastSort(lessThan), base, ...fastSort(moreThan)]
}

assert.deepEqual(fastSort([9,4,7,1,3,2,8,0,5,6]), [0,1,2,3,4,5,6,7,8,9])

//TODO: heap sort - разобрать (работа с индексами)