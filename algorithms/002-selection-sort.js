var numbers = [7, 2, 9, 1, 6, 4, 10, 3, 8, 5];

for (let i = 0; i < numbers.length - 1; i++) {
  let temp = undefined;
  let minIndex = i;
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[j] < numbers[minIndex]) {
      minIndex = j;
    }
  }

  if (minIndex !== i) {
    temp = numbers[i];
    numbers[i] = numbers[minIndex];
    numbers[minIndex] = temp;
  }
}

console.dir(numbers);
