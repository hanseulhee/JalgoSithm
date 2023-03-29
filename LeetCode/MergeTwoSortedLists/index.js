function mergeTwoLists(list1, list2) {
  if (!list1 || !list2) {
    return list1 || list2
  }

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  }

  list2.next = mergeTwoLists(list1, list2.next)
  return list2
}

mergeTwoLists([1, 2, 4], [1, 3, 4])
