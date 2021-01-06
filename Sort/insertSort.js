const source = randArray(5000, 0, 10000);

function randArray(len, min, max) {
  return Array.from({ length: len }, v => Math.floor(Math.random() * (max - min)) + min);
}

const insertSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    //外循环从1开始，默认arr[0]是有序段
    for (let j = i; j > 0; j--) {
      //j = i,将arr[j]依次插入有序段中
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        break;
      }
    }
  }
  return arr;
};

console.time("insert-sort");
console.log(insertSort(source));
console.timeEnd("insert-sort");

module.exports = insertSort;
