// Find the sum of distinct elements in two arrays
// Declare the two arrays
let array1 = [1, 3, 5, 7, 8, 9];
let array2 = [2, 5, 6, 8, 9];

// Initialize the sum
let sum = 0;

// check the elements in the first array
for (let i = 0; i < array1.length; i++) {
  let found = false;

  // check if the element is in the second array
  for (let j = 0; j < array2.length; j++) {
    if (array1[i] === array2[j]) {
      found = true;
      break;
    }
  }

  // if the element is not found in the second array, add it to the sum
  if (!found) {
    sum += array1[i];
  }
}

// check the elements in the second array
for (let i = 0; i < array2.length; i++) {
  let found = false;

  // check if the element is in the first array
  for (let j = 0; j < array1.length; j++) {
    if (array2[i] === array1[j]) {
      found = true;
      break;
    }
  }

  // if the element is not found in the first array, add it to the sum
  if (!found) {
    sum += array2[i];
  }
}

// Output the sum of distinct elements
console.log("The sum of distinct elements in the two arrays is: " + sum);
