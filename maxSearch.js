var arr = [5, 3, 4, 5, 8, 5, 7, 2, 3, 1, 6, 4, 7, 9, 11],
    max = a[0];

for (i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i]
    }
}
console.log("max value: " + max);