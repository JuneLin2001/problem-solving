# [5 kyu Convert PascalCase string into snake_case](https://www.codewars.com/kata/529b418d533b76924600085d/)

Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

Examples
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"


## 解題思路
### 按照題目描述若是數字的話直接回傳，接著使用`$1`判斷找到的大寫字母，把所有大寫字母前加`底線 _ `，並移除開頭的 `底線 _ `，最後通通轉小寫。

## 心得
### 練習正則表達式，使用 `replace()` 來更新字串與`$1`的使用。 參考：[MDN:String.prototype.replace()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

