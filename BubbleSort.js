var getBubbleSortedArray = (arr, flag) => {
    for (let pass = arr.length - 1; pass >= 0; pass--) {
        for (let curr = 0; curr < pass; curr++) {
            let check = flag == -1 ? arr[curr] > arr[curr + 1] : arr[curr] < arr[curr + 1];
            if (check) {
                let temp = arr[curr + 1];
                arr[curr + 1] = arr[curr];
                arr[curr] = temp;
            }
        }
    }
    return arr;
}
//Bubble sorting in descending order
console.log(getBubbleSortedArray([2, 4, 6, 78, -2, -13, 0, 89]));

//Bubble sorting in Acesnding order
console.log(getBubbleSortedArray([2, 4, 6, 78, -2, -13, 0, 89], -1));

//Time Complexity
// WorstCase:O(n*n);

//Space Complexity
//WorstCase:O(1) auxiliary
