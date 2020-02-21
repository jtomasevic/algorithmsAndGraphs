/* eslint-disable no-useless-constructor */
import { SimpleGraph } from '../index';

class NumericSimpleGraph extends SimpleGraph<number> {
    constructor() {
        super();
    }
}

export const simpleDemo = () => {
    const graph: NumericSimpleGraph = new NumericSimpleGraph();
    console.log('========= graph 2', graph);
    graph.addEdge(0, 1);
    graph.addEdge(0, 4);
    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(1, 4);
    graph.addEdge(2, 3);
    graph.addEdge(3, 4);
    // graph.print();
    console.log('******************* 0');
    graph.visitNodes(0);
    console.log('******************* 1');
    graph.visitNodes(1);
    console.log('******************* 2');
    graph.visitNodes(2);
};
