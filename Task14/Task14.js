// Set a breakpoint in JS and step through code execution.
function add(a, b) {
    return a + b; // BREAKPOINT
}

function multiply(x, y) {
    return x * y; // BREAKPOINT
}

function calculate() {
    
    let sum = add(5, 10); // BREAKPOINT
    
    let product = multiply(sum, 2);  // BREAKPOINT
    
    console.log("Result:", product);  
}

calculate();
