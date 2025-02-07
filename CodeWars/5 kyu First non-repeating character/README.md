# [5 kyu First non-repeating character](https://www.codewars.com/kata/52bc74d4ac05d0945d00054e)

Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("");

† Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.


## 解題思路
### 使用 Counter 的作法簡化邏輯，因為題目有`As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.`的關係，所以在使用 counter 統計的會是 lowerStr，但回傳的要是原本的 s 之中最早出現的那個 s[i]

## 心得
### 練習 Counter 的題目，也配養看到題目想出初步解法的能力。