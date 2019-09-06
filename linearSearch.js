var arr = [2, 6, 7, 1, 5, 9, 6, 7, 8, 12, 16, 26, 8],
    x = 9;

for (i = 0; i < arr.length; i++) {
    if (x == arr[i]) {
        console.log("Arrar index of: " + i);
        break
    } else {
        console.log("not found.")
    }
}