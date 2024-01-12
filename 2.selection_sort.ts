// selection sort
// computation complexity: O(n^2)
// memory complexity: O(n) + O(n) = O(n)

import { strict as assert } from 'node:assert';
const findSmallestIndex = (arr: number[]) => {
    if (!arr || arr.length === 0){
        return null
    }

    let smallest = arr[0]
    let index = 0
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < smallest){
            smallest = arr[i]
            index = i
        }
    }
    return index
}

const selectionSort = (arr: number[]) => {
    const sortedArr = []
    while (arr.length > 0){
        const smallIndex = findSmallestIndex(arr)
        sortedArr.push(arr[smallIndex])
        arr.splice(smallIndex, 1)
    }
    return sortedArr
}

assert.equal(findSmallestIndex([]), null)
assert.equal(findSmallestIndex([4, 1, 5, 6, 0, 2]), 4)
assert.deepEqual(selectionSort([]),[])
assert.deepEqual(selectionSort([4, 1, 5, 6, 0, 2]), [0,1,2,4,5,6])