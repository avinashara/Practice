var getSelectionSortedArray = (arr, flag) => {
    let min = 0, temp = null;
    for (let curr = 0; curr < arr.length; curr++) {
        min = curr;
        for (let minFlag = curr + 1; minFlag < arr.length; minFlag++) {
            if (arr[min] < arr[minFlag]) min = minFlag;
        }
        temp = arr[min];
        arr[min] = arr[curr];
        arr[curr] = temp;
    }
    return arr;
}
console.log(getSelectionSortedArray([2, 4, 6, 78, -2, -13, 0, 89]));

//Time Complexity
//worstCase O(n*n)
//BestCase:O(n)
