var getKthFromEnd = function(head, k) {
    if(!head){
        return null
    }
    let pre = head,
        post = head;

    for(let i = 0; i < k; i++){
        pre = pre.next;
    }
    while(pre){
        pre = pre.next;
        post = post.next;
    }
    return post
};