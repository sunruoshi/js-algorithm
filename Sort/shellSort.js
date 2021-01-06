const source = randArray(5000, 0, 10000);

function randArray(len, min, max) {
  return Array.from({ length: len }, v => Math.floor(Math.random() * (max - min)) + min);
}

const shellSort = arr => {
  var len = arr.length,
    temp,
    gap = 1;
  while (gap < len / 5) {
    //动态定义间隔序列
    gap = gap * 5 + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 5)) {
    for (var i = gap; i < len; i++) {
      temp = arr[i];
      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
  return arr;
};

console.time("shell-sort");
console.log(shellSort(source));
console.timeEnd("shell-sort");

module.exports = shellSort;
