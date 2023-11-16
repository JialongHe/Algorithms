var getIntersectionNode = function(headA, headB) {
    let curA = headA;
    let curB = headB;

    while (curA != curB) {
        curA = curA != null ? curA.next : headB;
        curB = curB != null ? curB.next : headA;
    }
    return curA;
};
/*
var getIntersectionNode = function(headA, headB) {
    let getLinkLen = (p) =>{
        let count = 0;
        while(p){
            p = p.next
            count++;
        }
        return count;
    }

    const len1 = getLinkLen(headA),
        len2 = getLinkLen(headB);
    let pL = headA,
        pS = headB,
        gap = len1 - len2;
    if(len2 > len1){
        pL = headB;
        pS = headA;
        gap = len2 - len1;
    }

    for(let i = 0; i < gap; i++){
        pL = pL.next
    }
    while(pL){
        if(pL.val == pS.val){
            return pL
        }
        pL = pL.next;
        pS = pS.next;
    }
    return null
};
*/