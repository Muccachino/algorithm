function insertionSort(array: number[]): number[] {
  let temp;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] < array[i]) {
      temp = array[i + 1];
      for (let j = i; j >= 0; j--) {
        if (array[j] < temp) {
          break;
        } else {
          array[j + 1] = array[j];
          array[j] = temp;
        }
      }
    }
  }
  return array;
}

console.log(insertionSort([1, 3, 5, 4, 6, 8, 2, 1, 5, 7, 1, 7]));
