// Use requestAnimationFrame to animate a div and explain why it’s smoother than setInterval.


//setInterval
// let x = 0;
// let dx = 1;
// const animate = setInterval(()=>{
//     const box1 = document.getElementById("box1");
//     x += dx;
//     box1.style.left = x + "px";
//     console.log("Box is moving");

//     if(x > 400){
//         dx = -dx;
//     }

//     if(x <= 0 ){
//         dx = -dx;
//     }
// },10);

//requestAnimationFrame()
let y = 0;
let dy = 1;
function animation(){
    const box2 = document.getElementById("box2");
    y += dy;
    box2.style.left = y + "px";

    if(y > 400){
        dy = -dy;
    }

    if(y <= 0 ){
        dy = -dy;
    }

    requestAnimationFrame(animation);
}

requestAnimationFrame(animation);