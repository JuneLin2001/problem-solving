function findOdd(A) {
  const counter = {};

  for (let i = 0; i < A.length; i++) {
    if (counter[A[i]]) {
      counter[A[i]]++;
    } else {
      counter[A[i]] = 1;
    }
  }

  for (let num in counter) {
    if (counter[num] % 2 !== 0) {
      return Number(num);
    }
  }
}
