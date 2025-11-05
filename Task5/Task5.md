```js

setTimeout(()=>{
    console.log("setTimeout");
},0)

const promise = new Promise(resolve=>{
    resolve("Promise1");
});

promise
.then(message=>{console.log(message); return "Promise2"})
.then(message=> console.log(message));
```
Even though the setTimeout has timing '0', it will be executed after promise.
It is becasue the setTimeout will go to the macrotask queue and .then() to the microtask queue and microtask queue runs before macrotask queue
