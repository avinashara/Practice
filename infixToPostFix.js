function infixToPostfix(string) {
    if (!string.length) return "Invalid String!!";
    let stack = [], postFix = "", opening = ['{', '[', '('], closing = ['}', ']', ')'], symbol = ['+', '-', '*', '/'];
    for (let char of string) {
        if (opening.includes(char)) {
            stack.push(char);
        }
        else if (closing.includes(char)) {
            if (char === '}') {
                postFix += cutArray(stack, '{');
            }
            else if (char === ']') {
                postFix += cutArray(stack, '[');
            }
            else if (char === ')') {
                postFix += cutArray(stack, '(');
            }
        }
        else if (symbol.includes(char)) {
            if (stack.length > 0 && symbol.includes(stack.length - 1)) {
                postFix += stack.pop();
            }
            stack.push(char);
        }
        else {
            postFix += char;
        }
    }
    postFix += stack.join("");
    return postFix;
}
function cutArray(stack, symbol) {
    return stack.splice(stack.indexOf(symbol)).splice(1).join("")
}