/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head;
    let slow = head;
    let hasCycle = false;

    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if(fast === slow) {
            hasCycle = true;
            break;
        }
    }

    if(!hasCycle) return null;

    fast = head;

    while(fast !== slow) {
        fast = fast.next;
        slow = slow.next;
    }

    return fast;
};