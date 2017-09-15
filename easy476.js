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
    $(".easy476").text("easy476:  "+findComplement(5));
})