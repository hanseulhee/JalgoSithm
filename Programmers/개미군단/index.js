function solution(hp) {
  const general = 5
  const soldier = 3

  return (
    Math.floor(hp / general) +
    Math.floor((hp % general) / soldier) +
    Math.floor((hp % general) % soldier)
  )
}
