# 3105. Longest Strictly Increasing or Strictly Decreasing Subarray

## 解題思路
### 要找出陣列中最長的嚴格遞增 or 遞減長度，所以用 maxLen 變數來記住。解法就暴力解定義 increase = 1 ; decrease = 1 ，之後遍歷陣列比較第 i 個和 i-1 個誰大誰小，如果都一樣的話 increase、decrease 都重置回 1。

## 心得
### 題目不太直覺，就匴解出來還是不太懂為啥 Example 2 的 [3,3,3,3] 會是 1 不是 0 ，要...惡補...資料結構...ㄌ...