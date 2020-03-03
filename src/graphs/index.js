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
    constructor(isDirected) {
        super();
        this.isDirected = isDirected;
        this.isWeighted = false;
        this.map = {};
        this.vertices = [];
        // this.addEdge = this.addEdge.bind(this);
    }

    addVertex(value: T) {
        this.map[value] = [];
        this.vertices.push(value);
    }

    addEdge(source: T, desination: T) {
        if (!this.map[source]) {
            this.addVertex(source);
        }
        if (!this.map[desination]) {
            this.addVertex(desination);
        }
        this.map[source].push(desination);
        if (this.isDirected === false) {
            this.map[desination].push(source);
        }
    }

    findConnectedComponents() {
        // eslint-disable-next-line prefer-const
        let visited = {};
        const labels = [];
        for (let i = 0; i < this.vertices.length; i++) {
            const el = this.vertices[i];
            if (!visited[el]) {
                const forLabel = this.visitNodesDFS(this.vertices[i], visited, []);
                labels.push(forLabel);
            }
        }
        return labels;
    }

    visitNodesDFS(start: T, visited, result) {
        visited[start] = true;
        // console.log('->', start);
        result.push(start);
        if (this.map[start]) {
            this.map[start].forEach(n => {
                if (!visited[n]) {
                    this.visitNodesDFS(n, visited, result);
                }
            });
        }
        return result;
    }

    previsitDFS(start: T, visited, result) {
        visited[start] = true;
        result.push(start);
        this.map[start].forEach(n => {
            if (!visited[n]) {
                this.previsitDFS(n, visited, result);
            }
        });
        return result;
    }

    postvisitDFS(start: T, visited, result) {
        visited[start] = true;
        this.map[start].forEach(n => {
            if (!visited[n]) {
                this.postvisitDFS(n, visited, result);
            }
        });
        result.push(start);
        return result;
    }

    visitNodes(start: T) {
        const queue = [];
        const visited = {};
        visited[start] = true;
        queue.push(start);
        const result = [];
        while (queue.length > 0) {
            const element = queue.shift();
            result.push(element);
            if (this.map[element]) {
                this.map[element].forEach(n => {
                    if (!visited[n]) {
                        visited[n] = true;
                        queue.push(n);
                    }
                });
            }
        }
        return result;
    }

    removeFromGraph(value: string) {
        for (let i = 0; i < this.vertices.length; i++) {
            const node = this.vertices[i];
            console.log('invesgating node to delete from node:', node);
            if (this.map[node]) {
                for (let ei = 0; ei < this.map[node].length; ei++) {
                    console.log('ask to delete node');
                    if (this.map[node][ei] === value) {
                        const removed = this.map[node].splice(ei, 1);
                        console.log('remove edge from', removed[0]);
                    }
                }
            }
        }
        for (let i = this.vertices.length - 1; i >= 0; i--) {
            if (this.vertices[i] === value) {
                const deleted = this.vertices.splice(i, 1);
                console.log('delete NODE from VERTICIES', deleted);
            }
        }
        delete this.map[value];
        console.log('after deleting graph is:', this.map, this.vertices);
        return value;
    }

    topologicalSort() {
        const stack = [];
        while (this.vertices.length > 0) {
            const sink = this.findSink();
            stack.push(sink);
            this.removeFromGraph(sink);
        }
        return stack.reverse();
    }

    findSink() {
        let startFrom = this.vertices[0];
        while (this.map[startFrom] && this.map[startFrom].length > 0) {
            // does not has verticies. if yes it will be non-empty array
            startFrom = this.map[startFrom][0];
        }
        return startFrom;
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
