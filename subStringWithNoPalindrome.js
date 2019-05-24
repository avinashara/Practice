function isSubStringNotApalindrome(str) {
    let unique = '';
    for (let i = 0; i < str.length; i++) {
        if (!unique.includes(str[i])) {
            unique += str[i];
        }
    }
    return unique.length > 1;
}
console.log(isSubStringNotApalindrome('aaaaab'))