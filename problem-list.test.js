//pesudo code : Test 1
// Given :
// nums = [1,2,3]
// target = 5
// return is expected to be = [1,2]


// Test 2:
// nums[4,5,6]
// target=11
// return=[1,2]

// Test 3:
//nums[2,7,11,15]
//target 9


const twoSums = require('./problem-list.js')

test('Given an array of integers, nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.', () => {
  expect(twoSums([2, 7, 11, 15], 9)).toEqual([0, 1])
})