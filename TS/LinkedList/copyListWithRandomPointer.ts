// 138. Copy List with Random Pointer
// https://leetcode.com/problems/copy-list-with-random-pointer/?envType=study-plan-v2&envId=top-interview-150

class RandomNode {
    val: number
    next: RandomNode | null
    random: RandomNode | null
    constructor(val?: number, next?: RandomNode | null, random?: RandomNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
        this.random = (random === undefined ? null : random)
    }
}

// Hashmap
function copyRandomList(head: RandomNode | null): RandomNode | null {
    if(!head){
        return null;
    }

    let current: RandomNode | null = head;
    let map: Map<RandomNode | null, RandomNode> = new Map<RandomNode, RandomNode>();

    while(current){
        map.set(current, new RandomNode(current.val, null, null));
        current = current.next;
    }

    current = head;
    while(current){
        let node: RandomNode = map.get(current)!;
        node.next = map.get(current.next) || null;
        node.random = map.get(current.random) || null;
        current = current.next;
    }
    
    return map.get(head)!;
};