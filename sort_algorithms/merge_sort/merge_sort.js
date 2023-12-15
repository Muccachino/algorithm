"use strict";
function merge(array1, array2) {
    let resultArray = [];
    let index1 = 0;
    let index2 = 0;
    while (index1 < array1.length && index2 < array2.length) {
        if (array1[index1] < array2[index2]) {
            resultArray.push(array1[index1]);
            index1++;
        }
        else {
            resultArray.push(array2[index2]);
            index2++;
        }
    }
    return resultArray.concat(array1.slice(index1)).concat(array2.slice(index2));
}
function mergeSort(unsortedArray) {
    let splitArray1 = unsortedArray.slice(0, Math.floor(unsortedArray.length / 2));
    let splitArray2 = unsortedArray.slice(Math.floor(unsortedArray.length / 2), unsortedArray.length);
    if (unsortedArray.length !== 1) {
        splitArray1 = mergeSort(splitArray1);
        splitArray2 = mergeSort(splitArray2);
    }
    return merge(splitArray1, splitArray2);
}
console.log(mergeSort([18, 22, 4, 5, 6, 10, 8, 12, 1]));
//# sourceMappingURL=merge_sort.js.map