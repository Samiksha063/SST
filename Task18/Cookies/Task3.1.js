//  Set and Read Cookies 
function setCookies(name, value){
    document.cookie = name  + "=" + value + ";";
}

function readCookies(name){
    let cookies = document.cookie.split(";");

    for(let cookie of cookies){
        let [key, value] = cookie.split("=");

        if(key === name){
            return value;
        }else{
            return null;
        }
    }
}

setCookies("username", "Samiksha");
console.log("Value: " + readCookies("username"));