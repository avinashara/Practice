let getFlattenArray = (arr) => {
    return arr.reduce((flat, toBeFlatte) => {
        return flat.concat(Array.isArray(toBeFlatte) ? getFlattenArray(toBeFlatte) : toBeFlatte)
    }, []);
}

console.log(getFlattenArray([[1, [2]], [3, 4, [[[6]]]]]));