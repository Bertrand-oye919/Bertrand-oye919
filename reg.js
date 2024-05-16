let input= document.querySelectorAll("input")[0];
input.oninput= function(){
    if(input.value ==""){
        input.classList.remove("active");
    }
        else{
            input.classList.add("active");
        }  
};