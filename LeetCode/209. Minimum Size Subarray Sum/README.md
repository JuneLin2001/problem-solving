# [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)
### Medium

Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

#### Example 1:
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

#### xample 2:
Input: target = 4, nums = [1,4,4]
Output: 1

#### Example 3:
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

## Constraints:

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104

Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).

## 解題思路
### 練習 slide window，首先由 right 開始慢慢往右移動，並加總 left 和 right 範圍的這個 window 中的總和，直到大於 target。當大於 target 時候 left 就往右移動來減少 minLength 的可能值，重複移動 left 和 right 直到找出正確答案。

## 心得
### 也是看了 [Wilson Ren 的 資料結構與演算法 (JavaScript)](https://www.udemy.com/course/algorithm-data-structure) 介紹這題經典題，要把這些題型弄熟打好演算法基礎!