// @flow

export default class Queue<T> {
    constructor() {
        this.queue = [];
    }

    enqueue(member: T) {
        this.queue.push(member);
    }

    dequeue(): T {
        const value = this.queue.shift();
        return value;
    }

    isEmpty() {
        return !this.queue.length > 0;
    }
}
