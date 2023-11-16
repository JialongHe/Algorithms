var deleteNode = function(head, val) {
    if(!head){
        return null
    }
    if(head.val == val){
        return head.next
    }

    let cur = head.next;
    let pre = head;

    while(cur && cur.val != val){
        pre = cur
        cur = cur.next
    }
    if(cur){
        pre.next = cur.next
    }
    
    return head;
};