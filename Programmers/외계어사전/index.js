function solution(spell, dic) {
  return dic.filter((v) => spell.every((c) => v.includes(c))).length ? 1 : 2
}

// let result = []
// for (let i = 0; i < dic.length; i++) {
//   let answer = []
//   for (let j = 0; j < spell.length; j++) {
//     answer.push(dic[i].includes(spell[j]))
//   }
//   result.push(answer)
// }
