function swap(array: number[], index1: number, index2: number) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function bubbleSort(array: number[]): number[] {
  for (let i = 0; i < array.length - 1; i++) {
    let switched: boolean = false;

    for (let j = 0; j < array.length - 1 - i; j++) {
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
