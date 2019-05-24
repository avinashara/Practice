function getSplittedArray(arr, pos) {
    for (let i = 0; i < pos; i++) {
        let temp = arr[0];
        for (let j = 0; j < arr.length - 1; j++) {
            arr[j] = arr[j + 1];
        }
        arr[arr.length - 1] = temp;
    }
    return arr;
}
getSplittedArray([1, 2, 3, 4, 5], 2)