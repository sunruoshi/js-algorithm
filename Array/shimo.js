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

/* Solution 1 */
const offsets = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1]
];

const groups = input.reduce((r, [i, j]) => {
  const own = [];
  temp = r.filter(group => {
    const found = group.some(g => offsets.some(o => i + o[0] === g[0] && j + o[1] === g[1]));
    if (!found) return true;
    own.push(...group);
  });

  return [...temp, [...own, [i, j]]];
}, []);
console.log(groups);

/* Solution 2 */
var groupedArr = new Array();
for (i = 0; i < input.length; i++) {
  var grouped = false;
  for (j = 0; j < groupedArr.length; j++) {
    for (k = 0; k < groupedArr[j].length; k++) {
      if (
        (input[i][0] == groupedArr[j][k][0] && Math.abs(input[i][1] - groupedArr[j][k][1]) == 1) ||
        (input[i][1] == groupedArr[j][k][1] && Math.abs(input[i][0] - groupedArr[j][k][0]) == 1)
      ) {
        groupedArr[j].push(input[i]);
        grouped = true;
        break;
      }
    }

    if (grouped) break;
  }

  if (!grouped) {
    var newGroup = new Array();
    newGroup.push(input[i]);
    groupedArr.push(newGroup);
  }
}
console.log(groupedArr);

/* Solution 3 */
function reForm(arr) {
  const ret = [];
  while (arr.length > 0) {
    var sub = [arr.shift()];
    var i = 0;
    while (i < sub.length) {
      var j = 0;
      /* Find neighboring form the rest */
      while (j < arr.length) {
        if (
          (arr[j][0] == sub[i][0] && Math.abs(arr[j][1] - sub[i][1]) == 1) ||
          (arr[j][1] == sub[i][1] && Math.abs(arr[j][0] - sub[i][0]) == 1)
        )
          sub.push(...arr.splice(j, 1));
        else j++;
      }
      i++;
    }
    ret.push(sub);
  }
  return ret;
}

/* 
Solution 4 - Recursion
***Will change the input array*** 
*/
var output = [];
while (input.length > 0) {
  var temp = [];
  var item = input[0];
  input.splice(0, 1);
  temp.push(item);
  findnext(item, temp);
  output.push(temp);
}
function findnext(item, temp) {
  for (var i = 0; i < input.length; i++) {
    if (
      (input[i][0] == item[0] && Math.abs(input[i][1] - item[1]) == 1) ||
      (input[i][1] == item[1] && Math.abs(input[i][0] - item[0]) == 1)
    ) {
      temp.push(input[i]);
      item1 = input[i];
      input.splice(i, 1);
      findnext(item1, temp);
    }
  }
}

console.log(output);
