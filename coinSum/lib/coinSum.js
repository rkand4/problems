/*
Write a function that returns the number of ways to make change of an amount given
denominations.
*/

export const coinSum = (amountLeft, denominations) => {
  if (amountLeft === 0) {
    return 1;
  }
  let result = 0;

  // Iterate through the denominations
  for (let i = 0; i < denominations.length; i++) {
    // Recurse as long as result is greater than 0
    // If difference is not greater than 0, then...
    if (amountLeft < denominations[i]) {
      // Continue, i.e., move on to next coin
      continue;
    }
    // Subtract current coin from amount left
    let remainder = amountLeft - denominations[i];
    result += coinSum(remainder, denominations.slice(i));
  }

  return result;
};

// coinSum(52, [25, 10, 5, 1])
// coinSum(27, [25, 10, 5, 1])
// coinSum(2, [25, 10, 5, 1])
// coinSum(2, [x25, 10, 5, 1])
// coinSum(2, [x25, x10, 5, 1])
// coinSum(2, [x25, x10, x5, 1])
// coinSum(1, [x25, x10, x5, 1])
// coinSum(0, [x25, x10, x5, 1])
