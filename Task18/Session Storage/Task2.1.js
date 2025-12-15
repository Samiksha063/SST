let sessionBtn = document.getElementById("sessionBtn");
let localBtn = document.getElementById("localBtn");

let sessionReBtn = document.getElementById("sessionReBtn");
let localReBtn = document.getElementById("localReBtn");

let sessionOutput = document.getElementById("sessionOutput");
let localOutput = document.getElementById("localOutput");

function sessionCounter(){
    let count = Number(sessionStorage.getItem("sessionCount"));
    count++;
    sessionStorage.setItem("sessionCount",count);
    sessionOutput.textContent = `Session count: ${sessionStorage.getItem("sessionCount")}`;
    console.log(count);
}

function localCounter(){
    let count = Number(localStorage.getItem("localCount"));
    count++;
    localStorage.setItem("localCount",count);
    localOutput.textContent = `Local count: ${localStorage.getItem("localCount")}`;
    console.log(count);
}

function sessionReCounter(){
    let reset = sessionStorage.removeItem("sessionCount");
    sessionOutput.textContent =`Session count: 0`;
}

function localReCounter(){
    let reset = localStorage.removeItem("localCount");
    localOutput.textContent =`Local count: 0`;
}

sessionBtn.addEventListener("click", sessionCounter);
localBtn.addEventListener("click",localCounter);

sessionReBtn.addEventListener("click", sessionReCounter);
localReBtn.addEventListener("click",localReCounter);
