// Replace blocking for loop with setTimeout and observe difference.
console.log("A");
setTimeout(() => {
    console.log("B");
}, 5000);
console.log("C");