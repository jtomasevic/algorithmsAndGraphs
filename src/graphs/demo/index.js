/* eslint-disable no-useless-constructor */
import { SimpleGraph } from '../index';
import { MatrixGraph } from '../matrixGraph';

// eslint-disable-next-line no-unused-vars
class NumericSimpleGraph extends SimpleGraph<number> {
    constructor() {
        super();
    }
}

class StringGraph extends SimpleGraph<string> {
    constructor() {
        super();
    }
}

export const simpleDemo = () => {
    const graph: StringGraph = new StringGraph();

    graph.addEdge('S', 'A');
    graph.addEdge('S', 'C');
    graph.addEdge('S', 'D');
    graph.addEdge('S', 'E');
    graph.addEdge('A', 'B');
    graph.addEdge('C', 'B');
    graph.addEdge('B', 'F');
    graph.addEdge('D', 'E');
    // graph.print();
    console.log('*******************');
    graph.calculateDistance('S');
    console.log('*******************');
    graph.shortestPathTree('S', 'B', {});
};

export const MatrixInit = () => {
    const m: MatrixGraph = new MatrixGraph(5, ['A', 'B', 'C', 'D', 'E']);
    m.addEdge('A', 'B');
    m.addEdge('A', 'C');
    m.addEdge('B', 'C');
    m.addEdge('B', 'D');
    m.addEdge('C', 'D');
    m.addEdge('E', 'C');
    m.print();
};
