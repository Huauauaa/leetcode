function ListNode(val = 0, next = null) {
  this.val = val;
  this.next = next;
}

const addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode();
  let carry = 0;
  let cur = dummy;

  while (l1 || l2 || carry) {
    const s = l1?.val + l2?.val + carry;
    carry = Math.floor(s / 10);
    cur.next = new ListNode(s % 10);
    cur = cur.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }
  return dummy.next;
};

// const l1 = [2, 4, 3];
// const l2 = [5, 6, 4];

// const result = addTwoNumbers(l1, l2);
// console.log(result);
