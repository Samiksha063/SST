//Multiple Cookies
function setMultipleCookies(key,value,age){
    document.cookie = key + "=" + value + ";" + "max-age=" + age + "; path=/";
}

function readMultipleCookies(name){
    let cookies = document.cookie.split(";");

    for(let cookie of cookies){
        let [key,value] = cookie.trim().split("=");
        if(key === name){
            return value;
        }
            
    }
    return null;
}
setMultipleCookies("name","Sonir",10);
setMultipleCookies("theme", "dark",20);
setMultipleCookies("language", "nepali",30);

console.log(readMultipleCookies("name"));
console.log(readMultipleCookies("theme"));
console.log(readMultipleCookies("language"));