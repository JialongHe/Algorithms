var rotateRight = function(head, k) {
    if(!head)   return null
    let len = 0;
    let sp = head;
    let fp = head;
    let p = head;
    while(p){
        len++;
        p = p.next;
    }
    k = k % len;
    if(k == 0){
        return head
    }
    for(let i = 0; i < k; i++){
        fp = fp.next
    }
    while(fp.next){
        fp = fp.next;
        sp = sp.next;
    }
    let temp = sp.next;
    sp.next = null;
    fp.next = head;
    return temp
};