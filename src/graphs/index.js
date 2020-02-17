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
        this.isBidirected = false;
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
