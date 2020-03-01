/* eslint-disable no-loop-func */
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

    calculateDistance(start: T) {
        const distances = {};
        for (const key in this.map) {
            distances[key] = -1;
        }
        distances[start] = 0;
        console.log('initial distances', distances);
        const queue = [];
        queue.push(start);
        while (queue.length > 0) {
            const element = queue.shift();
            this.map[element].forEach(n => {
                if (distances[n] === -1) {
                    distances[n] = distances[element] + 1;
                    queue.push(n);
                }
            });
        }
        console.log('final distances', distances);
        return distances;
    }

    shortestPathTree(root, destination) {
        const dinstances = this.calculateDistance(root);
        const distanceTable = [];
        for (const key in dinstances) {
            distanceTable.push(key);
        }
        const path = [];
        path.push(destination);
        let prevVertex = distanceTable.pop();
        while (destination !== prevVertex) {
            path.push(prevVertex);
            prevVertex = distanceTable.pop();
        }
        console.log('**** shortest path tree*******');
        console.log(path.reverse());
        console.log('**********************');
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
