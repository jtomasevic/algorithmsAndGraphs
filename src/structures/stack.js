// @flow

export default class Stack<T> {
    constructor() {
        this.data = [];
    }

    push(member: T) {
        this.data.push(member);
    }

    pop(): T {
        const value:T = this.data.pop();
        return value;
    }
}
