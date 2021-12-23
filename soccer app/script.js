;`use strict`

const gameEvents = new Map([
  [17, `⚽ goal`],
  [36, `🔃Substitution`],
  [47, `⚽ goal`],
  [61, `🔃Substitution`],
  [64, `📒 yellow card`],
  [69, `🧧 red card`],
  [70, `🔃Substitution`],
  [72, `🔃Substitution`],
  [76, `⚽ goal`],
  [88, `⚽ goal`],
  [92, `📒 yellow card`],
])

//1. create new array `events` of the diffrent game events
//that happened

const events = gameEvents.values()
const solution1 = [...new Set(events)]
console.log(solution1)

//2. yellow card from minutes 64 was unfair so remove this event

gameEvents.delete(64)
console.log(gameEvents)

//3.even cycle print game time =90

const even = 90 / gameEvents.size
console.log(`an event happened, an average, every ${even} minutes`)

//4. first half and second half result

const result = new Map()
for (const [a, b] of gameEvents) {
  const text = a <= 45 ? 'FIRST' : 'SECOND'
  //console.log(a, b)
  //result.set(`${a <= 45 ? 'FIRST' : 'SECOND'}  half `, `${a} = ${b}`)
  result.set(`${text} half `, `${a} ${b}`)
  console.log(`${a <= 45 ? 'FIRST' : 'SECOND'}  half `, `${a} = ${b}`)
}

console.log(result)
