function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function arrayToList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (const num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

function printList(node) {
    let result = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let List = new ListNode(0);
    let head = List;

    let sum = 0;
    let carry = 0;

    while (l1 !== null || l2 !== null || sum !== 0) {
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;
        sum = carry;
        carry = 0;
    }

    return List.next;
};

// Convert arrays to ListNodes
let l1 = arrayToList([2, 4, 3]);
let l2 = arrayToList([5, 6, 4]);

// Call the function and print the result
let result = addTwoNumbers(l1, l2);
printList(result); // Expected output: [7, 0, 8]
