/*
document.querySelector("button").
addEventListener("click", ()=>{
    passwd = document.querySelector("#password");
    confPass = document.querySelector("#confirm-pass");
    
    if ( passwd.value === confPass.value ){
        if ( passwd.classList.length > 0) {
            passwd.classList.pop();
            document.querySelector("#err-msg").style["visibility"] = "hidden";    
        }
    }else{
        document.querySelector("#err-msg").style["visibility"] = "visible";
        passwd.classList.add("error");
        confPass.classList.add("error");     
    }
});*/