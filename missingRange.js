/**
 * Given a sorted integer array where the range of elements are [0, 99] inclusive, return its missing ranges.
 * For example, given [0, 1, 3, 50, 75], return [“2”, “4->49”, “51->74”, “76->99”]
 */

/**
 * @param {Array} arr
 * @return {Array}
 */

var missingRange = function(arr) {
  if (arr.length == 0) return ["0->99"];
  if (arr.length == 100) return [];
  var i, last = -1;
  var start, end;
  var results = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] - last != 1) {
      start = last + 1;
      end = arr[i] - 1;
      if (start == end) results.push('' + start);
      else results.push(start + '->' + end);
    }
    last = arr[i]
  }
  if (arr[i - 1] < 99) {
    start = arr[i - 1] + 1;
    end = 99;
    if (start == end) results.push('' + start);
    else results.push(start + '->' + end);
  }
  return results;
}

var equalArray = function(arr1, arr2) {
  var is_same = (arr1.length == arr2.length) && arr1.every(function(
    element, index) {
    return element === arr2[index];
  });
  return is_same;
}

console.assert(equalArray(missingRange([]), ["0->99"]));
var a = [];
var i = 0;
for (; i < 100; i++) a.push(i);
console.assert(equalArray(missingRange(a), []));
console.assert(equalArray(missingRange([0, 1, 3, 50, 75]), ["2", '4->49',
  '51->74', '76->99'
]))
