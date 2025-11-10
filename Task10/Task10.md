## Modifying same page using defer, async and default and compairing their load time using console.time();

When loading the script normally, the js blocks the html parsing. When usiing defer, the html loads first and then the script runs after the dom has been fully ready but using async, the script is downloaded in the background and is executed as soon as the it is ready.

console.time() measures the execution time of js and the result of execution using defer, async and default were almost same becasue it measured the time taken by js to execute the code, not the actual page rendering.