function reducer(result, str) {
  if (result === '') return '';
  if (str === '') return '';
  var len = Math.min(result.length, str.length);
  var matched = '';
  for (var i = 0; i < len; i++) {
    if (result[i] === str[i]) {
      matched += result[i];
    } else {
      i = len;
    }
  }
  return matched;
}

/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function (strs) {
  if (strs.length <= 0) {
    return '';
  }
  return strs.reduce(
    reducer,
    strs[0],
  );
};

console.log(['flower','flow','flight']); // => 'fl'
console.log(['dog','racecar','car']); // => ''

// Runtime: 60 ms, faster than 70.17% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 37.1 MB, less than 6.35% of JavaScript online submissions for Longest Common Prefix.
