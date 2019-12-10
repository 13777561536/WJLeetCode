$(function(){
    /*
    * 算汉明距离
    * 将数字转化为二进制数，对比算出两个数字不同的地方
    *  ^ 符号表示按位异或运算
    *  0101   (expression1)
    *  1100   (expression2)
    *  ----
    *  1001   (result)
    *
    * */
    var hammingDistance = function(x, y) {
        return (x^y).toString(2).replace(/0/g,'').length;
    };
    $(".easy461").text("easy461:  "+hammingDistance(1,4));
})