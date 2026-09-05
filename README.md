# LeetCode and Codewars

放自己 Leetcode 和 Codewars 刷題的紀錄，包含解題思路與心得，並使用 Docusaurus 實現靜態網站部署。

> [網站連結](https://junelin2001.github.io/problem-solving)

## Built With

![MDX](https://img.shields.io/badge/mdx-%23fcb32c.svg?style=for-the-badge&logo=mdx&logoColor=white)
![Docusaurus](https://img.shields.io/badge/docusaurus-%23ffff50.svg?style=for-the-badge&logo=docusaurus&logoColor=3ECC5F)
![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)

## [LeetCode Stats Card](https://github.com/JacobLinCool/LeetCode-Stats-Card)

[![LeetCode Stats](https://leetcard.jacoblin.cool/JuneLin2001?theme=dark&font=Trispace&ext=activity)](https://leetcode.com/u/JuneLin2001/)

## [Codewars readme stats](https://github.com/DiniFarb/codewars_readme_stats)

[![Codewars](https://github.r2v.ch/codewars?user=JuneLin2001&theme=gradient&top_languages=true)](https://www.codewars.com/users/JuneLin2001)

## Scripts

目前使用 [Clip LeetCode](https://chromewebstore.google.com/detail/clip-leetcode/cnghimckckgcmhbdokjielmhkmnagdcp) 這個 chrome 擴充功能，抓取題目並轉換成 markdown 格式。  
新增一題時，到該題資料夾創建一個 `original.md` 檔案，並把題目貼至其中，再執行：

```sh
npm run convert -- <題號或資料夾路徑>
```

例如 `npm run convert -- 9999` 或 `npm run convert -- "docs/LeetCode/9999. Some Problem"`，會自動把 `original.md` 轉成排版好的 `_Description.md`（去除多餘的 HTML 標籤、轉成 Markdown 語法等）。

## Roadmap

- [x] 加搜尋功能
- [ ] 樣式弄好看一點
- [x] 加關鍵字 Label 的功能
