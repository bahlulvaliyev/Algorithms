var arr = [5, 3, 4, 5, 8, 5, 7, 2, 3, 1, 6, 4, 7, 9, 11],
    min = arr[0],
    max = arr[0];

for (i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
    } else if (max < arr[i]) {
        max = arr[i];
    }
}

console.log("Min value is: " + min + "\nMax value is: " + max + "\nDistance between : " + (max - min));