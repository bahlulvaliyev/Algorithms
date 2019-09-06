var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var x = 4,
  i = 0,
  j = a.length;

while (i < j) {
  var m = Math.floor((i + j) / 2);
  if (x > a[m]) {
    i = m + 1;
  } else if (x == a[m]) {
    console.log("bh=>" + m);
    break;
  } else if (a[m] > x) {
    j = m;
  } else {
    console.log("bhNot Found");
    break;
  }
}

function binarySearch(arr, search) {
  var left = 0,
    right = arr.length;
  while (left <= right) {
    var middle = Math.floor((left + right) / 2);

    if (search == arr[middle]) {
      return middle;
    } else if (search > arr[middle]) {
      left = middle + 1;
    } else if (search < arr[middle]) {
      right = middle;
    } else {
      return -1;
    }
  }
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sArr = [5, 6, 3, 4];
console.log(binarySearch(4));