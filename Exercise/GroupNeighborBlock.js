const input = [
  [1, 1],
  [2, 1],
  [2, 4],
  [2, 5],
  [3, 2],
  [3, 4],
  [4, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [5, 3],
  [6, 3],
  [6, 4],
  [6, 5]
];

function groupNeighbor(arr) {
  const output = [];
  while (arr.length > 0) {
    var sub = [arr.shift()];
    var i = 0;
    while (i < sub.length) {
      var j = 0;
      while (j < arr.length) {
        if (
          (arr[j][0] === sub[i][0] && Math.abs(arr[j][1] - sub[i][1]) === 1) ||
          (arr[j][1] === sub[i][1] && Math.abs(arr[j][0] - sub[i][0]) === 1)
        ) {
          sub.push(...arr.splice(j, 1));
        } else {
          j++;
        }
      }
      i++;
    }
    output.push(sub);
  }
  return output;
}

console.log(groupNeighbor(input));
