const source = randArray(5000, 0, 10000);

function randArray(len, min, max) {
  return Array.from({ length: len }, v => Math.floor(Math.random() * (max - min)) + min);
}

const quickSort = arr => {
  if (arr.length <= 1) {
    return arr; //递归出口
  }
  var left = [],
    right = [],
    current = arr.splice(0, 1); //注意splice后，数组长度少了一个
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < current) {
      left.push(arr[i]); //放在左边
    } else {
      right.push(arr[i]); //放在右边
    }
  }
  return quickSort(left).concat(current, quickSort(right)); //递归
};

console.time("quick-sort");
console.log(quickSort(source));
console.timeEnd("quick-sort");

module.exports = quickSort;
