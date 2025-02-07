
# [1523. Count Odd Numbers in an Interval Range](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/)
### Easy

Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).


#### Example 1:
Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].

#### Example 2:
Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].

## Constraints:
0 <= low <= high <= 10^9

## 解題思路
### 本來用 arr.lengh 作法結果看到記憶體爆炸，後來想通欸不對啊直接簡化用變數++就好就過了，但複雜度超糟就是ㄌ <br> hint中有提到一個點是 (high - low + 1) 可以從中判斷，改進之後變公式解甚至不用迴圈就可以直接算出。

## 心得
### 兩種解法分別放在 js 和 ts 檔案中，暴力解放 js，公式解放 ts，~~順便附上記憶體爆炸的紀念照~~

![](https://i.imgur.com/4j0NyKG.png)