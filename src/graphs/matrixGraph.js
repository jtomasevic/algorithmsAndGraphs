export class MatrixGraph {
    constructor(size: number, nodes: [], isBidirectional = false) {
        this.matrix = [];
        this.nodes = nodes;
        this.nodeIndexes = {};
        this.isBidirectional = isBidirectional;
        nodes.forEach((n, index) => {
            this.nodeIndexes[n] = index;
        });
        for (let i = 0; i < size; i++) {
            this.matrix.push([]);
            for (let j = 0; j < size; j++) {
                this.matrix[i].push(0);
            }
        }
    }

    print() {
        this.printHeader();
        this.matrix.forEach((arr, index) => {
            let text = `${this.nodes[index]}`;
            arr.forEach(el => {
                text = `${text}, ${el}`;
            });
            console.log(text);
        });
    }

    addEdge(from, to) {
        this.matrix[this.nodeIndexes[from]][this.nodeIndexes[to]] = 1;
        if (this.isBidirectional === true) {
            this.matrix[this.nodeIndexes[to]][this.nodeIndexes[from]] = 1;
        }
    }

    printHeader() {
        let text = ' ';
        this.nodes.forEach(n => {
            text = `${text}, ${n}`;
        });
        console.log(text);
    }
}
