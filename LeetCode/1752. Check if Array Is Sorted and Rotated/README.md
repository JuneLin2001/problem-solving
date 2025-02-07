# [1752. Check if Array Is Sorted and Rotated](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/)
### Easy

Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

There may be duplicates in the original array.

Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.

 

#### Example 1:
Input: nums = [3,4,5,1,2]
Output: true
Explanation: [1,2,3,4,5] is the original sorted array.
You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].

#### Example 2:
Input: nums = [2,1,3,4]
Output: false
Explanation: There is no sorted array once rotated that can make nums.

#### Example 3:
Input: nums = [1,2,3]
Output: true
Explanation: [1,2,3] is the original sorted array.
You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.
 

## Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100

## 解題思路
### 想法就是暴力解的遍歷陣列比較陣列是否為非遞減（[3,3,3,3]這種全部都同一個數的也算非遞減所以會是true），但由於陣列可能是旋轉過的所以有1次的寬限，如果不只1次的話就要算false了

## 心得
### U點小難，一開始沒看懂題目Rotated的意思，想說為何[2,1]也算true，後來再讀一次之後把邏輯打掉重寫一次才成功