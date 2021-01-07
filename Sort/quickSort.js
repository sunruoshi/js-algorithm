const source = randArray(50000, 0, 100000);

function randArray(len, min, max) {
  return Array.from({ length: len }, v => Math.floor(Math.random() * (max - min)) + min);
}

const quickSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  let left = [],
    right = [],
    pivot = arr.splice(0, 1);
  for (let i = 0; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return [...quickSort(left), ...pivot, ...quickSort(right)];
};

const quickSort2 = (arr, left, right) => {
  if (arr.length < 2) return arr;
  const len = arr.length;
  (left = typeof left !== "number" ? 0 : left),
    (right = typeof right !== "number" ? len - 1 : right);
  if (left < right) {
    let index = left + 1;
    for (var i = index; i <= right; i++) {
      /*
       * 从left + 1开始, 小于left的，将其放到index的位置，index右移一位
       * 循环结束时，left+1 到 index-1 都将小于 arr[left]
       */
      if (arr[i] < arr[left]) {
        [arr[i], arr[index]] = [arr[index], arr[i]];
        index++;
      }
    }
    // 交换 left 和 index-1, 这样index-1左边均小于arr[index-1]
    [arr[left], arr[index - 1]] = [arr[index - 1], arr[left]];
    quickSort2(arr, left, index - 2);
    quickSort2(arr, index, right);
  }
  return arr;
};

console.time("quick-sort-2");
quickSort2(source.slice());
console.timeEnd("quick-sort-2");

console.time("quick-sort-1");
quickSort(source.slice());
console.timeEnd("quick-sort-1");
