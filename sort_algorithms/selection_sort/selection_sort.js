function swap(array, index1, index2) {
    var _a;
    _a = [array[index2], array[index1]], array[index1] = _a[0], array[index2] = _a[1];
}
function selectionSort(array) {
    var temp;
    for (var i = 0; i < array.length; i++) {
        temp = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[temp]) {
                temp = j;
            }
        }
        if (temp !== i) {
            swap(array, temp, i);
        }
    }
    return array;
}
console.log(selectionSort([10, 2, 30, 25, 12, 28, 44, 5, 56, 24, 78, 1]));
