function countSubArray(a, m, k) {
  let count = 0;

  for (let i = 0; i < a.length - m + 1; i++) {
    let subarray = a.slice(i, i + m);
    let found = false;

    for (let j = 0; j < m; j++) {
      for (let l = j + 1; l < m; l++) {
        if (subarray[j] + subarray[l] === k) {
          found = true;
          break;
        }
      }
      if (found) {
        break;
      }
    }

    if (found) {
      count++;
    }
  }

  return count;
}

const a1 = [2, 4, 7, 5, 3, 5, 8, 5, 1, 7];
const m1 = 4;
const k1 = 10;

console.log(countSubArray(a1, m1, k1)); // Output: 5

const a2 = [15, 8, 8, 2, 6, 4, 1, 7];
const m2 = 2;
const k2 = 8;

console.log(countSubArray(a2, m2, k2)); // Output: 2
