$(function(){
    /**
     * @param {string} s
     * @return {string}
     */
    var reverseWords = function(s) {
        var arr= s.split(" ")
        var result= arr.map(function (item) {return item.split("").reverse().join("");})
        console.log(result);
        return result.join(" ");
    };
    $(".easy557").text("easy557:  "+reverseWords("Let's take LeetCode contest"));

})