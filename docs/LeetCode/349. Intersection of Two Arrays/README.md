---
title: 349. Intersection of Two Arrays
description: leetcode.com/problems/intersection-of-two-arrays
keywords: [LeetCode, 349. Intersection of Two Arrays, Easy,Array,Hash Table,Two Pointers,Binary Search,Sorting]
---

# [349. Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/)
### Easy
Given two integer arrays nums1 and nums2, return an array of their 
intersection. Each element in the result must be unique and you may return the result in any order.

#### Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

#### Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

## Constraints:
```
1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
```

## 解題思路
### 原本想用 Counter 之類的做法，但看到`Set 的特色是有 has() 這個方法，可以快速判斷該 Set 中是否包含某個元素` 就直接大幅簡化了

## 心得
### 謝謝PJ大佬的筆記 [[JS] JavaScript 集合（Set）](https://pjchender.dev/javascript/js-set/), 只要熟練語法基本就能秒解開一堆 easy 了。<br/> 