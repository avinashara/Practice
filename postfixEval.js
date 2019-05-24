function getValue(string) {
    let symbol = { '+': (a, b) => a + b, '-': (a, b) => a - b, '*': (a, b) => a * b, '/': (a, b) => a / b }, stack = [], result = 0;
    for (let char of string) {
        if (symbol[char]) {
            if (stack.length >= 2) {
                let op1 = stack.pop(), op2 = stack.pop();
                stack.push(symbol[char](+op2, +op1));
            }
        } else {
            stack.push(char);
        }
    }
    return stack.pop();
}

console.log(getValue("23+"));