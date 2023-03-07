/**
 * Input: LeetCode
 * Output: 0
 *
 * Input: LoveLeetCode
 * Output: 2
 *
 * Input: aabb
 * Output: -1
 */

function firstUniqueCharacterInString(s) {
  const charactersCount = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charactersCount[char] = charactersCount[char] + 1 || 1;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charactersCount[char] === 1) {
      return i;
    }
  }

  return -1;
}

var result = firstUniqueCharacterInString("loveleetcode");
console.log(result);
