function reverseArray(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

function splitArrayWithPos(arr, pos) { debugger;
    reverseArray(arr, 0, arr.length - 1);
    reverseArray(arr, 0, arr.length - pos - 1);
    reverseArray(arr, arr.length - pos, arr.length - 1);
    return arr;
}

splitArrayWithPos([1, 2, 3, 4, 5, 6, 7], 3);