let input=document.getElementById("op");
let buttons=document.getElementsByTagName("button");
let result="";
let arr=Array.from(buttons);
arr.forEach(buttons=>{
    buttons.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            result=eval(result);
        input.value=result;
        }
        else if(e.target.innerHTML=='DEL'){
            result=result.substring(0,result.length-1);
            input.value=result;
        }
        else if(e.target.innerHTML=='AC'){
            result="";
            input.value=result;
        }
        else{
            result+=e.target.innerHTML;
            input.value=result;
        }
    })
})