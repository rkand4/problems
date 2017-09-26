/*********
Export an object that contains multiple functions

const scratch = {
  fn1: function(){},
  fn2: function(){}
};

export { scratch };
**********/

/*********
Export multiple functions all at once

const fn1 = function(){};
const fn2 = function(){};

export { fn1, fn2 };
**********/

/*********
Export functions as you write them

export const fn1 = function(){};
export const fn2 = function(){};
**********/

export const largestSumSubarray = array => {
  let start = 0;
  let maxStart = 0;
  let maxEnd = 0;
  let largest = 0;
  let current = 0;

  // If all the numbers in the array are negative, then...
  if (array.filter(el => el >= 0).length === 0) {
    // Return the smallest negative number
    let maxNegativeNum = array.indexOf(Math.max(...array));
    return [maxNegativeNum, maxNegativeNum];
  }

  /*
  Iterate through the array summing numbers and checking if the current sum
  is greater than the largest sum. Since there exists a positive number in the
  array, then the largest contiguous sum subset of numbers must start with a
  positive number. Thus, every time the current sum is negative reset the current
  sum to 0 (it's essentially starting a new subset).
  */
  for (let i = 0; i < array.length; i++) {
    current += array[i];
    if (current < 0) {
      start = i + 1;
      current = 0;
    }

    if (largest < current) {
      largest = current;
      maxStart = start;
      maxEnd = i;
    }
  }

  return [maxStart, maxEnd];
};
