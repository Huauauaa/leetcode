function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
export default function (l1, l2) {
  const d = new ListNode();
  let curr = d;
  let carry = 0;
  while (l1 || l2 || carry) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = (sum / 10) | 0;
    curr.next = new ListNode(sum % 10);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    curr = curr.next;
  }
  return d.next;
}
