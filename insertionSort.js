var array = [9, 8, 5, 90, 2, 4, 56, 5, 8, 6, 25, 10],
    key;

for (i = 1; i < array.length; i++) {
    key = array[i];
    j = i - 1;
    while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j = j - 1;
    }
    array[j + 1] = key
}
console.log(array);