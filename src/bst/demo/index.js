import { Bst } from '../index';

export const insertBstDemo = () => {
    const bt: Bst = new Bst();
    bt.add(6);
    bt.add(4);
    bt.add(8);
    bt.add(3);
    bt.add(5);
    bt.add(7);
    bt.add(9);
    // bt.delete(5);
    // bt.delete(9);
    console.log('****** in order');
    bt.traverseInOrder(bt.root);
    console.log('****** pre order');
    bt.traversePreOrder(bt.root);
    console.log('****** post order');
    bt.traversePostOrder(bt.root);
    console.log('****** breadthFirstSearch');
    bt.breadthFirstSearch(bt.root);
};
