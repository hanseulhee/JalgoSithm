function solution(nums) {
  const get = nums.length / 2

  const count = new Set(nums).size;
  console.log(count)
  console.log(count > get ? get : count)

  return count > get ? get : count
}

solution([3, 1, 2, 3])

// function solution(nums) {
//   const get = nums.length / 2

//   const count = [...new Set(nums)]
//   console.log(count)
//   console.log(count.length > get ? get : count.length)

//   return count.length > get ? get : count.length
// }

// solution([3, 1, 2, 3])
