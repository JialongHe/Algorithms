var reversePrint = function(head) {
    const res = [];
    let p = head;

    while(p){
        res.unshift(p.val);
        p = p.next;
    }
    return res
};