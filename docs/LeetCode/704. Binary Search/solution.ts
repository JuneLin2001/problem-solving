function search(nums: number[], target: number): number {
  let min = 0;
  let max = nums.length - 1;

  while (min <= max) {
    let middle = Math.floor((max + min) / 2);
    if (target > nums[middle]) {
      min = middle + 1;
    } else if (target < nums[middle]) {
      max = middle - 1;
    } else if (target === nums[middle]) {
      return middle;
    }
  }
  return -1;
}
