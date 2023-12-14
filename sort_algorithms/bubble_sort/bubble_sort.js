function swap(array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}
function bubbleSort(array) {
    for (var i = 0; i < array.length - 1; i++) {
        var switched = false;
        for (var j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
                switched = true;
            }
        }
        if (switched === false) {
            break;
        }
    }
    return array;
}
console.log(bubbleSort([10, 20, 43, 22, 5, 100, 6]));
