/* eslint-disable no-unused-vars */
import React from 'react';
import { SimpleGraph } from '../graphs';

class StringGraph extends SimpleGraph<string> {

}

export const initGraph = (isDirected) => {
    const graph: StringGraph = new StringGraph(isDirected);
    graph.addEdge('S', 'A');
    graph.addEdge('S', 'C');
    graph.addEdge('S', 'D');
    graph.addEdge('S', 'E');
    graph.addEdge('A', 'B');
    graph.addEdge('C', 'B');
    graph.addEdge('B', 'F');
    graph.addEdge('D', 'E');
    return graph;
};

export const initDisconectedGraph = (isDirected) => {
    const graph: StringGraph = new StringGraph(isDirected);
    graph.addVertex('a');
    graph.addVertex('b');
    graph.addEdge('e', 'd');
    graph.addEdge('e', 'f');
    graph.addEdge('e', 'c');
    graph.addEdge('i', 'h');
    graph.addEdge('i', 'g');
    graph.addEdge('i', 'j');
    return graph;
};

export const initDirectedGraph = () => {
    const graph: StringGraph = new StringGraph(true);
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'D');
    graph.addEdge('A', 'D');
    graph.addEdge('A', 'E');
    graph.addEdge('E', 'D');
    return graph;
};

export const graphUI = () => {
    let isDirected = false;
    const changeDirection = (e) => {
        // isDirected = document.querySelector('#isDirected:checked');
        isDirected = e.target.checked;
        console.log(isDirected);
    };
    const bfs = () => {
        const graph: StringGraph = initGraph(isDirected);
        const value = document.getElementById('start').value;
        const result = graph.visitNodes(value);
        console.log('********************');
        console.log('bfs', result);
    };

    const dfs = () => {
        const graph: StringGraph = initGraph(isDirected);
        const value = document.getElementById('start').value;
        const visited = graph.visitNodesDFS(value, {}, []);
        console.log('********************');
        console.log('dfs', visited);
    };
    const connectedComponents = () => {
        const graph: StringGraph = initDisconectedGraph(isDirected);
        const discomp = graph.findConnectedComponents();
        console.log('********************');
        console.log(discomp);
    };
    const previsit = () => {
        const graph: StringGraph = initGraph(isDirected);
        const value = document.getElementById('start').value;
        const result = graph.previsitDFS(value, {}, []);
        console.log('previsit nodes:', result);
    };
    const postvisit = () => {
        const graph: StringGraph = initGraph(isDirected);
        const value = document.getElementById('start').value;
        const result = graph.postvisitDFS(value, {}, []);
        console.log('postvisit nodes:', result);
    };

    const topologicalSort = () => {
        const graph: StringGraph = initDirectedGraph();
        const result = graph.topologicalSort();
        console.log(result);
    };

    return (
        <>
        Is directed ?
        <input id='isDirected' type='checkbox' onChange={changeDirection}/>
        <br/>
        <input id='start' value='S'/>
        <button onClick={bfs}>Visit nodes BFS</button>
        <button onClick={dfs}>Visit nodes DFS</button>
        <button onClick={connectedComponents}>Find connected comp.</button>
        <br/>
        <button onClick={previsit}>Previsit nodes</button>
        <button onClick={postvisit}>Postvisit nodes</button>
        <br/>
        <b>Directed graphs</b>
        <br/>
        <button onClick={topologicalSort}>Topoligical sort</button>

        </>
    );
};
