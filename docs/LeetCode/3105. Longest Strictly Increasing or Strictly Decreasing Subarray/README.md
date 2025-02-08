# [3105. Longest Strictly Increasing or Strictly Decreasing Subarray](https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/description/)
### Easy

You are given an array of integers nums. Return the length of the longest 
subarray
 of nums which is either 
strictly increasing
 or 
strictly decreasing
.


#### Example 1:

Input: nums = [1,4,3,3,2]

Output: 2

Explanation:

The strictly increasing subarrays of nums are [1], [2], [3], [3], [4], and [1,4].

The strictly decreasing subarrays of nums are [1], [2], [3], [3], [4], [3,2], and [4,3].

Hence, we return 2.

#### Example 2:

Input: nums = [3,3,3,3]

Output: 1

Explanation:

The strictly increasing subarrays of nums are [3], [3], [3], and [3].

The strictly decreasing subarrays of nums are [3], [3], [3], and [3].

Hence, we return 1.

#### Example 3:

Input: nums = [3,2,1]

Output: 3

Explanation:

The strictly increasing subarrays of nums are [3], [2], and [1].

The strictly decreasing subarrays of nums are [3], [2], [1], [3,2], [2,1], and [3,2,1].

Hence, we return 3.

 

## Constraints:
```
1 <= nums.length <= 50
1 <= nums[i] <= 50
```

## 解題思路
### 要找出陣列中最長的嚴格遞增 or 遞減長度，所以用 maxLen 變數來記住。解法就暴力解定義 increase = 1 ; decrease = 1 ，之後遍歷陣列比較第 i 個和 i-1 個誰大誰小，如果都一樣的話 increase、decrease 都重置回 1。

## 心得
### 題目不太直覺，就算解出來還是不太懂為啥 Example 2 的 [3,3,3,3] 會是 1 不是 0 ，要...惡補...資料結構...ㄌ...