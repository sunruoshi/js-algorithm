const source = randArray(5000, 0, 10000);

function randArray(len, min, max) {
  return Array.from({ length: len }, v => Math.floor(Math.random() * (max - min)) + min);
}

const bubbleSort = arr => {
  var len = arr.length;
  for (let outer = len; outer >= 2; outer--) {
    for (let inner = 0; inner <= outer - 1; inner++) {
      if (arr[inner] > arr[inner + 1]) {
        [arr[inner], arr[inner + 1]] = [arr[inner + 1], arr[inner]];
      }
    }
  }
  return arr;
};

console.time("bubble-sort");
console.log(bubbleSort(source));
console.timeEnd("bubble-sort");

module.exports = bubbleSort;
