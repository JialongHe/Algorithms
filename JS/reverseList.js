var reverseList = function(head) {
    let pre = head,
        cur = null;
    
    while(pre){
        let temp = pre.next;
        pre.next = cur;
        cur = pre;
        pre = temp;
    }
    return cur;
};