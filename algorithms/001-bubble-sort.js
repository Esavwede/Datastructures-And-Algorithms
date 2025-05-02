var numbers = [7, 2, 9, 1, 6, 4, 10, 3, 8, 5];

for (var i = 0; i < numbers.length - 1; i++) {
  for (var j = i + 1; j < numbers.length; j++) {
    if (numbers[i] > numbers[j]) {
      let temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }
  }
}

console.dir(numbers);
