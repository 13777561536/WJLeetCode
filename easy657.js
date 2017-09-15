$(function(){
    var judgeCircle = function(moves) {
        //L和R的数量对等，U和D的数量对等才能回到原点
        var arr= moves.split("");
        var result=false;
        var L_num= 0,R_num= 0,U_num= 0,D_num= 0;
        for(var a in arr){
            switch (arr[a]){
                case 'L':
                    L_num+=1;
                    break;
                case 'R':
                    R_num+=1;
                    break;
                case 'U':
                    U_num+=1;
                    break;
                case 'D':
                    D_num+=1;
                    break;
            }
        }
        if(L_num==R_num&&U_num==D_num){
            result= true;
        }else{
            result= false;
        }
        return result;
    };
    $(".easy657").text("easy657:  "+judgeCircle("LLRR"));

})