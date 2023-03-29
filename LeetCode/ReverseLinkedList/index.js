function reverseList(head) {
  let prev = null
  let current = null

  while (head) {
    current = head.next
    head.next = prev
    prev = head
    head = current
  }
  return prev
}
