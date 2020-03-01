/* eslint-disable guard-for-in */
// @flow

export class Graph<T> {
    isBidirected: boolean;

    isWeighted: boolean;

    value: T;

    map: { [T]: Array<T> };
}

export class SimpleGraph<T> extends Graph<T> {
    constructor() {
        super();
        this.isBidirected = true;
        this.isWeighted = false;
        this.map = {};
        // this.addEdge = this.addEdge.bind(this);
    }

    addVertex(value: T) {
        this.map[value] = [];
    }

    addEdge(source: T, desination: T) {
        if (!this.map[source]) {
            this.addVertex(source);
        }
        if (!this.map[desination]) {
            this.addVertex(desination);
        }
        this.map[source].push(desination);
        if (this.isBidirected) {
            this.map[desination].push(source);
        }
    }

    visitNodes(start: T) {
        const queue = [];
        const visited = {};
        visited[start] = true;
        queue.push(start);
        while (queue.length > 0) {
            const element = queue.shift();
            console.log('->', element);
            this.map[element].forEach(n => {
                if (!visited[n]) {
                    visited[n] = true;
                    queue.push(n);
                }
            });
        }
    }

    print() {
        console.log('---------', this.map);
        for (const vertex in this.map) {
            console.log(vertex);
            let message = '';
            this.map[vertex].forEach(element => {
                message = `${message} , ${element}`;
            });
            console.log(message);
        }
        console.log('---------');
    }
}
