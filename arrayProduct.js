function getArrayWithProduct(arr, prod) {
    let size = arr.length;
    let p = 1, res = 0;
    for (let start = 0, end = 0; end < size; end++) {
        p *= arr[end];
        while (start < end && p >= prod) {
            p /= arr[start++];
        }
        if (p < prod) {
            res += (end - start + 1);
        }
    }
    return res;
}
console.log(getArrayWithProduct([1, 2, 3, 4], 10))