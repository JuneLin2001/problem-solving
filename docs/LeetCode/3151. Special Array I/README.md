## [3151. Special Array I](https://leetcode.com/problems/special-array-i)

### Easy

An array is considered special if every pair of its adjacent elements contains two numbers with different parity.

You are given an array of integers nums. Return true if nums is a special array, otherwise, return false.



#### Example 1:
Input: nums = [1]
Output: true
Explanation:
There is only one element. So the answer is true.

#### Example 2:
Input: nums = [2,1,4]
Output: true
Explanation:
There is only two pairs: (2,1) and (1,4), and both of them contain numbers with different parity. So the answer is true.

#### Example 3:
Input: nums = [4,3,1,6]
Output: false
Explanation:
nums[1] and nums[2] are both odd. So the answer is false.


## Constraints:
```
- 1 <= nums.length <= 100
- 1 <= nums[i] <= 100
```

## 解題思路
### 想法是就直接暴力的遍歷 nums 陣列，相鄰的兩個數是否為一偶一奇，是的話直接return false，如果都不是的話那就return true！

## 心得
### 看到標easy然後好像看得懂題目耶就來試試看，耗時大概20分鐘左右就解出來了