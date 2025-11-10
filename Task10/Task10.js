// Modify the same page to defer JS loading (defer/async) and compare load times.console.time("measure speed");

console.time("measure speed");
const container = document.getElementById("container");

const image = document.createElement("img");
image.src = "./large_image.jpeg";
document.body.appendChild(image);

for(let i=0; i<100; i++){

    const divs = document.createElement("div");
    divs.textContent = `Div ${i+1}`;
    container.appendChild(divs);
    divs.classList.add("divs");

}

console.timeEnd("measure speed");