#### Example 1:

> **Input:** nums = [1,0,2,0,3]  
> **Output:** 2  
> **Explanation:**
>
> The only possible valid selections are the following:

Choose `curr = 3`, and a movement direction to the left.

```
[1,0,2,0,3] -> [1,0,2,0,3] -> [1,0,1,0,3] -> [1,0,1,0,3] -> [1,0,1,0,2] ->
[1,0,1,0,2] -> [1,0,0,0,2] -> [1,0,0,0,2] -> [1,0,0,0,1] -> [1,0,0,0,1] ->
[1,0,0,0,1] -> [1,0,0,0,1] -> [0,0,0,0,1] -> [0,0,0,0,1] -> [0,0,0,0,1] ->
[0,0,0,0,1] -> [0,0,0,0,0].
```

Choose curr = 3, and a movement direction to the right.

```
[1,0,2,0,3] -> [1,0,2,0,3] -> [1,0,2,0,2] -> [1,0,2,0,2] -> [1,0,1,0,2] ->
[1,0,1,0,2] -> [1,0,1,0,1] -> [1,0,1,0,1] -> [1,0,0,0,1] -> [1,0,0,0,1] ->
[1,0,0,0,0] -> [1,0,0,0,0] -> [1,0,0,0,0] -> [1,0,0,0,0] -> [0,0,0,0,0].
```

#### Example 2:

> **Input:** nums = [2,3,4,0,4,1,0]  
> **Output:** 0  
> **Explanation:**
> There are no possible valid selections.

#### Constraints:

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 100`
- There is at least one element `i` where `nums[i] == 0`.
