function getDigit(num: number, i: number) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}

function digitCount(num: number) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num)) + 1);
}

function mostDigits(numbers: number[]): number {
  let maxDigits = 0;
  numbers.forEach((num) => {
    maxDigits = Math.max(digitCount(num), maxDigits);
  });
  return maxDigits;
}

function radixSort(arr: number[]): number[] {
  const highest: number = mostDigits(arr);

  for (let i = 0; i < highest; i++) {
    let buckets: number[][] = [[], [], [], [], [], [], [], [], [], []];
    //Array.from({ length: 10 }, () => []);
    arr.forEach((num) => {
      let digit = getDigit(num, i);
      buckets[digit].push(num);
    });

    arr = []; //([] as number[]).concat(...buckets);
    for (let j = 0; j < buckets.length; j++) {
      if (buckets[j].length !== 0) {
        arr.push(...buckets[j]);
      }
    }
  }

  return arr;
}

console.log(radixSort([718, 323, 78, 328, 13]));
