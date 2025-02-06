# [704. Binary Search](https://leetcode.com/problems/binary-search/)

### Easy

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.


#### Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

#### Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1


## Constraints:
1 <= nums.length <= 104  
-104 < nums[i], target < 104  
All the integers in nums are unique.  
nums is sorted in ascending order.  

## 解題思路
### 來練習一下經典題，試了兩種解法分別放在 js 和 ts ，js 是用從頭開始暴力遍歷陣列的 Linear Search，ts則是效能較好的 Binary Search，而題目描述有提到 `You must write an algorithm with O(log n) runtime complexity.` 所以正解會是 Binary Search 的作法。

## 心得
### 看了 [Wilson Ren 的 資料結構與演算法 (JavaScript)](https://www.udemy.com/course/algorithm-data-structure) 就馬上來試一下練練手，好耶！