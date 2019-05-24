function rotateArray(arr, pos) { debugger;
    let finalArr = [], n = arr.length, mod = pos % n;
    for (let i = 0; i < n; i++) {
        finalArr[i] = arr[(i + mod) % n];
    }
    return finalArr;
}
rotateArray([1, 2, 3, 4, 5, 6], 10)