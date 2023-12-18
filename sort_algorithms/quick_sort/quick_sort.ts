function swap(array: number[], index1: number, index2: number) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function pivot(
  array: number[],
  start: number = 0,
  end: number = array.length - 1
): number {
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
