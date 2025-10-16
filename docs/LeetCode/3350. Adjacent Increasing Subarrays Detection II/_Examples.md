#### Example 1:

> **Input:** nums = [2,5,7,8,9,2,3,4,3,1]  
> **Output:** 3  
> **Explanation:**
>
> - The subarray starting at index 2 is `[7, 8, 9]`, which is strictly increasing.
> - The subarray starting at index 5 is `[2, 3, 4]`, which is also strictly increasing.
> - These two subarrays are adjacent, and 3 is the maximum possible value of k for which two such adjacent strictly increasing subarrays exist.

#### Example 2:

> **Input:** nums = [1,2,3,4,4,4,4,5,6,7]  
> **Output:** 2
> **Explanation:**
>
> - The subarray starting at index 0 is `[1, 2]`, which is strictly increasing.
> - The subarray starting at index 2 is `[3, 4]`, which is also strictly increasing.
> - These two subarrays are adjacent, and 2 is the maximum possible value of k for which two such adjacent strictly increasing subarrays exist.

#### Constraints:

- `2 <= nums.length <= 2 * 105`
- `-109 <= nums[i] <= 109`
