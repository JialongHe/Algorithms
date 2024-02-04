// 225. Implement Stack using Queues
// https://leetcode.com/problems/implement-stack-using-queues/description/

class MyQueue {
    queue: (any)[];

    constructor() {
        this.queue = [];
    }

    push(n: number) {
        this.queue.push(n);
    }

    peek(): (number) {
        return this.queue[0];
    }

    pop() {
        return this.queue.shift();
    }

    size() {
        return this.queue.length;
    }

    isEmpth() {
        return this.queue.length === 0
    }
}

class MyStack {
    private q: MyQueue;

    constructor() {
        this.q = new MyQueue();
    }

    push(x: number): void {
        this.q.push(x);
        let count: number = this.q.size() - 1;
        while (count > 0) {
            this.q.push(this.q.pop());
            count--;
        }
    }

    pop(): number {
        return this.q.pop();
    }

    top(): number {
        return this.q.peek();
    }

    empty(): boolean {
        return this.q.isEmpth();
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */