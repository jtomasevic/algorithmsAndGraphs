// @flow
import Node from './node';
import { Queue } from '../structures';

/**
 * BinarySearchTree
 */
export class Bst {
    root: Node;

    add(key: number) {
        this.root = this.addRec(this.root, key);
    }

    /* A recursive function to insert a new key in BST */
    addRec(root: Node, key: number): Node {
        /* If the tree is empty, return a new node */
        if (root == null || root === undefined) {
            root = new Node(key);
            return root;
        }
        /* Otherwise, recur down the tree */
        if (key < root.key) {
            root.left = this.addRec(root.left, key);
        } else if (key > root.key) {
            root.right = this.addRec(root.right, key);
        }
        /* return the (unchanged) node pointer */
        return root;
    }

    delete(value: Node) {
        this.root = this.deleteRecursive(this.root, value);
    }

    deleteRecursive(current: Node, value: number): Node {
        if (current == null) {
            return null;
        }

        if (value === current.value) {
            // Node to delete found
            // ... code to delete the node will go here
            // 1. node has no children
            // this is the simplest case; we just need to replace this node with null in its parent node
            if (current.left == null && current.right == null) {
                return null;
            }
            // 2. node has exactly one child
            // in the parent node, we replace this node with its only child.
            if (current.left == null) {
                return current.right;
            }
            if (current.right === null) {
                return current.left;
            }
            // 3. node has two children
            //  this is the most complex case because it requires a tree reorganization
            current.right = this.deleteRecursive(current.right, value);
            // First, we need to find the node that will replace the deleted node.
            // We'll use the smallest node of the node to be deleted's right sub-tree:
            const smallestValue: number = this.findSmallestValue(current.right);
            // Then, we assign the smallest value to the node to delete and after that,
            current.value = smallestValue;
            current.right = this.deleteRecursive(current.right, smallestValue);
        }
        if (value < current.value) {
            current.left = this.deleteRecursive(current.left, value);
            return current;
        }
        return current;
    }

    findSmallestValue(root: Node): number {
        return root.left == null ? root.value : this.findSmallestValue(root.left);
    }

    /**
     * @description
     * Depth-First Search
     * Depth-first search is a type of traversal that goes deep as much as possible in every child
     * before exploring the next sibling.
     * There are several ways to perform a depth-first search: in-order, pre-order and post-order.
     * The in-order traversal consists of first visiting the left sub-tree, then the root node, and finally the right sub-tree:
     * @param {Node} node from where to start transversal
     * @summary  Useful for getting sorted list out of BST
     */
    traverseInOrder(node: Node) {
        if (node != null && node !== undefined) {
            this.traverseInOrder(node.left);
            console.log(` ${node.key}`);
            this.traverseInOrder(node.right);
        }
    }

    /**
     * Pre-order traversal visits first the root node, then the left subtree, and finally the right subtree
     * @param {Node} node from where to start transversal
     * @summary useful for making copy of binary trees, or evaluate expression trees.
     */
    traversePreOrder(node: Node) {
        if (node != null && node !== undefined) {
            console.log(` ${node.key}`);
            this.traversePreOrder(node.left);
            this.traversePreOrder(node.right);
        }
    }

    /**
     * Post-order traversal visits the left subtree, the right subtree, and the root node at the end
     * @param {Node} node from where to start transversal
     * @summary seful for deleting trees (because need to delete children before deleting parent)
     */
    traversePostOrder(node: Node) {
        if (node != null) {
            this.traversePostOrder(node.left);
            this.traversePostOrder(node.right);
            console.log(` ${node.key}`);
        }
    }

    /**
     * This is another common type of traversal that visits all the nodes of a level before going to the next level.
     * This kind of traversal is also called level-order and visits all the levels of the tree starting from the root, and from left to right.
     * For the implementation, we'll use a Queue to hold the nodes from each level in order.
     * We'll extract each node from the list, print its values, then add its children to the queue:
     */
    breadthFirstSearch() {
        if (this.root == null) {
            return;
        }
        const nodes: Queue<Node> = new Queue<Node>();
        nodes.enqueue(this.root);
        while (!nodes.isEmpty()) {
            const node: Node = nodes.dequeue();
            console.log(` ${node.key}`);
            if (node.left != null) {
                nodes.enqueue(node.left);
            }

            if (node.right != null) {
                nodes.enqueue(node.right);
            }
        }
    }
}
