function swap(array: number[], index1: number, index2: number) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

function selectionSort(array: number[]): number[] {
  let temp: number;
  for (let i = 0; i < array.length; i++) {
    temp = i;
    for (let j = i + 1; j < array.length; j++) {
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
