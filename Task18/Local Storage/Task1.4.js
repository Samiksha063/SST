let username = document.getElementById("username");
let rememberme = document.getElementById("rememberme");
let clearData = document.getElementById("clearData");
let message = document.getElementById("message");
let welcome = document.createElement("h5");

window.addEventListener("load", ()=>{
    if(localStorage.getItem("username")){
        username.value = localStorage.getItem("username");
        rememberme.checked = true;

        welcome.textContent = `Welcome ${username.value}`;
        document.body.appendChild(welcome);
    }
})

clearData.addEventListener("click",()=>{
    if(localStorage.getItem("username") === null){
        message.textContent = "No data in localstorage";
    }else{
        localStorage.removeItem("username");
        username.value = "";
        rememberme.checked = false;
        
        welcome.style.display = "none";
        message.textContent = "User deleted";
    }
});

rememberme.addEventListener("change",()=>{
    if(rememberme.checked){
        if(username.value !== ""){
            localStorage.setItem("username",username.value);
            message.textContent = "Username remembered";
        }else{
            message.textContent = "Empty username";
            rememberme.checked = false;
        }
    }else{
        localStorage.removeItem("username");
        message.textContent = "Username not remembered";
    }
})

