var array = [9, 8, 5, 2, 4, 5, 8, 6, 10],
    temporary, min;

for (i = 0; i < array.length; i++) {
    min = i;
    for (j = i; j < array.length; j++) {
        if (array[j] < array[min]) {
            min = j;
        }
    }
    temporary = array[i];
    array[i] = array[min];
    array[min] = temporary;
}
console.log(array);