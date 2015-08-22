/**
 * Given a sorted integer array where the range of elements are [0, 99] inclusive, return its missing ranges.
 * For example, given [0, 1, 3, 50, 75], return [“2”, “4->49”, “51->74”, “76->99”]
 */

/**
 * @param {Array} arr
 * @return {Array}
 */

var missingRange = function(arr, start, end) {
  arr.unshift(start - 1);
  arr.push(end + 1);
  var i;
  var results = [];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] != 1) {
      results.push(getRange(arr[i - 1] + 1, arr[i] - 1));
    }
  }
  return results;
}

var getRange = function(from, to) {
  return (from == to) ? '' + from : from + '->' + to;
}

var equalArray = function(arr1, arr2) {
  var is_same = (arr1.length == arr2.length) && arr1.every(function(
    element, index) {
    return element === arr2[index];
  });
  return is_same;
}

console.log(missingRange([], 0, 99));
console.log(missingRange([0, 1, 3, 50, 75], 0, 99));
