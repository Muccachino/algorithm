"use strict";
function swap(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}
function pivot(array, start = 0, end = array.length - 1) {
    let pivot = start;
    let index = start;
    for (let i = 0; i < array.length; i++) {
        if (array[pivot] > array[i]) {
            index++;
            swap(array, index, i);
        }
    }
    console.log(array);
    swap(array, pivot, index);
    console.log(array);
    return index;
}
console.log(pivot([5, 2, 1, 8, 4, 7, 6, 3, 9, 10, 4, 12, 5, 3]));
//# sourceMappingURL=quick_sort.js.map