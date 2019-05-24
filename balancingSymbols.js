function checkSymbolBal(string) {
    let arr = [], openingSymbol = ['{', '[', '('], closeingSymbol = ['}', ']', ')'];
    for (let char of string) {
        if (openingSymbol.indexOf(char) > -1) {
            arr.push(char);
        } else if (closeingSymbol.indexOf(char) > -1) {
            if ((char === '}' && arr[arr.length - 1] !== '{') || (char === '[' && arr[arr.length - 1] !== ']') || (char === ')' && arr[arr.length - 1] !== '(')) {
                return false;
            } else {
                if (!arr.pop()) {
                    return false;
                }
            }
        }
    }
    return !arr.length;
}
