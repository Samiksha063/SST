// // document.cookie = "name = Samridhdi; expires = Fri, 12 Dec 2025 9:15:00 UTC;";
// document.cookie = "name=Samridhdi;max-age=10";

function cookieWithExipres(key,value,expiry){
    document.cookie = key + "=" + value + "; expires=" + expiry + "; path=/Task18";
}

function cookieWithMaxage(key,value,age){
    document.cookie = key + "=" + value + "; max-age=" + age + "; path=/Task18";
}

let expiry = "Fri, 13 Dec 2025 10:00:00 UTC";
cookieWithExipres("username", "Soniska", expiry);
cookieWithMaxage("age","15",5);