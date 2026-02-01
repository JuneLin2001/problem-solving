#### Example 1:

> **Input:** [1,2,3,12]  
> **Output:** 6  
> **Explanation:**  
> The best possible way to form 3 subarrays is: [1], [2], and [3,12] at a total cost of 1 + 2 + 3 = 6.  
> The other possible ways to form 3 subarrays are:
>
> - [1], [2,3], and [12] at a total cost of 1 + 2 + 12 = 15.
> - [1,2], [3], and [12] at a total cost of 1 + 3 + 12 = 16.

#### Example 2:

> **Input:** [5,4,3]  
> **Output:** 12  
> **Explanation:** The best possible way to form 3 subarrays is: [5], [4],  
> and [3] at a total cost of 5 + 4 + 3 = 12.  
> It can be shown that 12 is the minimum cost achievable.

> #### Example 3:

> **Input:** [10,3,1,1]  
> **Output:** 12  
> **Explanation:** The best possible way to form 3 subarrays is: [10,3],  
> [1], and [1] at a total cost of 10 + 1 + 1 = 12.  
> It can be shown that 12 is the minimum cost achievable.

## Constraints:

- `1 <= dimensions.length <= 100`
- `dimensions[i].length == 2`
- `1 <= dimensions[i][0], dimensions[i][1] <= 100`

Input: nums =
Output: 12
Explanation:
Example 3:

Input: nums = [10,3,1,1]
Output: 12
Explanation: The best possible way to form 3 subarrays is: [10,3], [1], and [1] at a total cost of 10 + 1 + 1 = 12.
It can be shown that 12 is the minimum cost achievable.
