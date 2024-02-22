// const twoSums  = require('/problem-list')
// test('Given[4,5,6] and target of 11, returns [1,2]', () => {
//  const nums = [4,5,6]
//  const target = 11
//   let solution = []
//   expect(solution).toBe([1,2])
// })

// module.exports= twoSums

function twoSums(nums, target) {
  map = new Map();
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    if (map.get(num) === undefined) map.set(target - num, i);
    else return [map.get(num), i]
  }
}
module.exports = twoSums
