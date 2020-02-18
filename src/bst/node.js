// @flow

export default class Node {
    left: Node;

    right: Node;

    key: number;

    constructor(key: number) {
        this.key = key;
        this.right = null;
        this.left = null;
    }
}
