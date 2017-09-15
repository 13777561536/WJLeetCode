$(function(){
    /*
    * 检测单词在键盘的一行上
    *
    * */
    //本人写的一大堆，先转成熟组啊  之类的来
    var arr1=['q','w','e','r','t','y','u','i','o','p'];
    var arr2=['a','s','d','f','g','h','j','k','l'];
    var arr3=['z','x','c','v','b','n','m'];
    var findWords = function(words) {
        var result=[];
        words.forEach(function(item){

            if(getResult(item)){
                result.push(item);
            }
        })
        return result;
    };
    function getResult(item){
        var back_val1= true;

        var temp= item.split("");
        temp.forEach(function(val,index){
            if(index==0){
                if(arr1.indexOf(val.toLowerCase())>-1){
                    back_val1= getTrue(arr1,temp);
                }else if(arr2.indexOf(val.toLowerCase())>-1){
                    back_val1= getTrue(arr2,temp);
                }else{
                    back_val1= getTrue(arr3,temp);
                }
            }
        })
        return back_val1;
    }
    function getTrue(arr,item){
        var back_val2= true;
        item.forEach(function(val){
            if(arr.indexOf(val.toLowerCase())==-1){
                back_val2= false;
            }
        });
        return back_val2;
    }

    //结果看到讨论区有人这么写，很强势  我炸了
    var findWords2= function(words){
        return words.filter(function(w){
            return /^([qwertyuiop]*|[asdfghjkl]*|[zxcvbnm]*)$/i.test(w)
        })
    }
    console.log(findWords2(["Hello", "Alaska", "Dad","Peace"]));
    $(".easy500").text("easy500:  "+findWords(["Hello", "Alaska", "Dad", "Peace"]));
})