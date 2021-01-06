const source = randArray(5000, 0, 10000);

function randArray(len, min, max) {
  return Array.from({ length: len }, v => Math.floor(Math.random() * (max - min)) + min);
}

const quickSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  var left = [],
    right = [],
    pivot = arr.splice(0, 1);
  for (let i = 0; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
};

console.time("quick-sort");
console.log(quickSort(source));
console.timeEnd("quick-sort");
