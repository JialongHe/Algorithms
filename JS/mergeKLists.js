var mergeKLists = function(lists) {
    let len = lists.length;
    if(len <= 1){
        return lists[0] || null
    }else if(len == 2){
        return merge(lists[0], lists[1])
    }else{
        let middle = Math.floor(len / 2)
        return merge(mergeKLists(lists.slice(0, middle)), mergeKLists(lists.slice(middle)))
    }
};

const merge = (list1, list2) => {
    let node = new ListNode(0);
    let head = node;

    while(list1 && list2){
        if(list1.val < list2.val){
            node.next = list1;
            list1 = list1.next;
        }else{
            node.next = list2;
            list2 = list2.next;
        }
        node = node.next
    }
    if(list1){
        node.next = list1
    }
    if(list2){
        node.next = list2
    }
    return head.next
}