// iife => immediately involked function expression 
var ans = (function (){
    var privateval = 12;

    return {
        getter:function(){
            console.log(privateval); 
        },
        setter:function(val){
            privateval = val;
        }
    }
})()