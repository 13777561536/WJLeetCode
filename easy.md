### 每日一题

#### 1025 - 除数博弈 - [链接](https://leetcode-cn.com/problems/divisor-game/)
```
/**
 * 多带几个数字进去试试如果数字是奇数，
 * 只能选择1，最后的结果就是谁得2谁赢
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    if (N === 1) {
        return false;
    }
    return N % 2 === 0;
};
```