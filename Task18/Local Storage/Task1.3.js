// Delete and Clear                                
let name = document.getElementById("name");
let address = document.getElementById("address");

let storeNameBtn = document.getElementById("storeName");
let storeAddressBtn = document.getElementById("storeAddress");

let removeName = document.getElementById("removeName");
let removeAddress = document.getElementById("removeAddress");

let clearDataBtn = document.getElementById("clearData");

let output = document.getElementById("output");

storeNameBtn.addEventListener("click",()=>{
    if(name.value === ""){
        output.textContent = "No name entered";
    }else{
        localStorage.setItem("name", name.value);
        console.log("Name saved to localstorage");
        output.textContent = "Name saved to localstorage";
    } 

});

storeAddressBtn.addEventListener("click",()=>{
    if(name.value === ""){
        output.textContent = "No address entered";
    }else{
        localStorage.setItem("address", address.value);
        console.log("Address saved to localstorage");
        output.textContent = "Address saved to localstorage";
    } 

});


removeName.addEventListener("click",()=>{
    if(localStorage.getItem("name") === null){
        console.log("nothing to delete");
        output.textContent = "Nothing to delete";
    }else{
        localStorage.removeItem("name");
        output.textContent = "Name deleted from localstorage";
    }
});

removeAddress.addEventListener("click",()=>{
    if(localStorage.getItem("address") === null){
        console.log("nothing to delete");
        output.textContent = "Nothing to delete";
    }else{
        localStorage.removeItem("address");
        output.textContent = "Address deleted from localstorage";
    }
});

clearDataBtn.addEventListener("click",()=>{
    if(name.value === "" && address.value === ""){
        console.log("nothing to clear");
        output.textContent = "Nothing to clear";
    }else{
        localStorage.clear();
        output.textContent = "Everthing cleared from localstorage";
    }
});