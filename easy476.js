$(function(){
    /*
    * 输入的数字
    * 转化为二进制
    * 再反转
    * 输出数字
    * */
    var findComplement = function(num) {
        var nums= num.toString(2);//转化为二进制
        var result=nums.replace(/[0|1]/g,function(val){
            return val^1;
        })
        return parseInt(result,2);
    };
    // 打call 以5来举例 5 => 101 2 => 010 其实就是 101和111进行按位异或(^)
    var nbFn = function(num) {
        var temp = ~0; // -1
        while (temp & num) {
            temp <<= 1; // -2 -4 -8
        }
        return ~temp ^ num;
    };
    $(".easy476").text("easy476:  "+findComplement(5));
})