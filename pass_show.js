const pass_hide=document.querySelector("#password")
const show_icon=document.querySelector("#show")
const login=document.querySelector(".lin")
const text_name=document.querySelector(".text")

show_icon.addEventListener("click",()=>{
    console.log(pass_hide.value);
     if(pass_hide.type=="password"){
        pass_hide.type= "text"
        show_icon.src = "eye-slash-solid.svg"
     }
     else{
        pass_hide.type= "password"
        show_icon.src = "/img/eye-solid.svg"

     }
    
})

login.addEventListener('click',()=>{

    
    if(login){
        window.location.href ="index.html"
    }
    
    
})