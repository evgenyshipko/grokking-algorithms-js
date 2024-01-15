// quick sort
// computation complexity: O(n*log(n))
// memory complexity O(logn) - stack depth
import { strict as assert } from 'node:assert';
const partition = (arr: number[], start: number, end: number) => {
    const baseIndex = Math.floor(Math.random() * (end - start) + start)

    const base = arr[baseIndex]
    let baseNewIndex = start - 1;
    for (let i = start; i <= end; i++){
        if (arr[i] <= base){
            baseNewIndex += 1
        }
    }

    arr[baseIndex] = arr[baseNewIndex]
    arr[baseNewIndex] = base

    while(start < end){
        if (arr[start] <= base){
            start++
            continue
        }
        if (arr[end] > base){
            end--
            continue
        }
        const temp = arr[end]
        arr[end] = arr[start]
        arr[start] = temp
        start++
        end--
    }

    return baseNewIndex
}


export const quickSort = (arr: number[], start: number, end: number) => {
    if (start >= end){
        return
    }
    const baseNewIndex = partition(arr, start, end)

    quickSort(arr, start, baseNewIndex - 1)
    quickSort(arr, baseNewIndex + 1, end)
}

let array = [9,4,7,1,3,2,8,0,5,6]

quickSort(array, 0, array.length - 1)

assert.deepEqual(array, [0,1,2,3,4,5,6,7,8,9])