// Store and Retrieve a Value                
let name = document.getElementById("name");
let storeNameBtn = document.getElementById("storeName");
let retreiveNameBtn = document.getElementById("retrieveName");
let output = document.getElementById("output");

storeNameBtn.addEventListener("click",()=>{
    if(name.value === ""){
        output.textContent = "No name entered";
    }else{
        localStorage.setItem("person", name.value);
        console.log("Name saved to localstorage");
        output.textContent = "Name saved to localstorage";
    } 

});

retreiveNameBtn.addEventListener("click",()=>{
    let retrieveName = localStorage.getItem("name");
    console.log(retrieveName);
    output.textContent = retrieveName ? `Saved name: ${retrieveName}` : "No name saved";
});