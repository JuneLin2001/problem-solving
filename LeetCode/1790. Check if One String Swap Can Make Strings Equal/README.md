# [1790. Check if One String Swap Can Make Strings Equal](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal)
### Easy

You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.
Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

#### Example 1:
Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation: For example, swap the first character with the last character of s2 to make "bank".

#### Example 2:
Input: s1 = "attack", s2 = "defend"
Output: false
Explanation: It is impossible to make them equal with one string swap.

#### Example 3:
Input: s1 = "kelb", s2 = "kelb"
Output: true
Explanation: The two strings are already equal, so no string swap operation is required.

#### Constraints:
1 <= s1.length, s2.length <= 100
s1.length == s2.length
s1 and s2 consist of only lowercase English letters.

## 解題思路
### 因為兩個字串一樣長所以可以寫在同個 for 迴圈裡面，先是暴力遍歷陣列找出兩個字串的差異是在第 i 個位置並記錄到 arr，如果 arr 等於 2 的話就比較兩個字串的那兩個交換位置之後是不是相等，是的話就 true。還有個狀況是兩個字串一開始就一樣所以 arr 會是 0，這樣直接回傳 true 就好。arr 長度除了 2 和 0 以外就都是 false

## 心得
### 原本想用Set的資料結構但發現一般的陣列array就夠了