const numbers = [5, 2, 9, 1, 5, 6];

// Sort the array in descending order
numbers.sort(function(a, b) {
  return b - a;
});

console.log(numbers); // Outputs: [9, 6, 5, 5, 2, 1]
