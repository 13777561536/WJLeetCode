$(function(){
    /*
    *将2n个数字两两组成数组
    * 实现每个数组中最小值相加最大
    *
    * 题意解析后，分析为先排序，后将1,3,5等数组相加即为最大数字
    *
    *
    * */

    var arrayPairSum = function(nums) {
        var sum=0;
        //排序后的数组
        var temp= getArr(nums);
        //将排序后的数组1,3,5相加
        if(temp.length>2){
            for(var i=0;i<temp.length;){
                sum+=temp[i];
                i+=2;
            }
        }else{
            sum= temp[0];
        }
        return sum;
    };
    //以下是我进行排序的方法，使用了递归原理
    function getArr(arr){
        if(arr.length<=1){
            return arr;
        }
        var left=[],right=[];
        var midIndex= Math.floor(arr.length/2);
        var mid= arr.splice(midIndex,1);
        for(var i=0;i<arr.length;i++){
            if(arr[i]<mid){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
        return getArr(left).concat(mid).concat(getArr(right));
    }

    /*
    * 以下是在讨论区学看到的
    *
    * 采用了sort进行数组的排序，可正反排
    * */
    var arrayPairSum2 = function(nums) {
        var number = 0;
        nums.sort(function(a,b){return a-b});
        for (var i = 0; i < nums.length; i=i+2) {
            number += nums[i];
        }
        return number;
    };

    $(".easy561").text("easy561:  "+arrayPairSum([1,4,3,2]));
})