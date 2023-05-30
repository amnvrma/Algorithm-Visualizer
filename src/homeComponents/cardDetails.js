import graph from "./images/graph.png";
import primes from "./images/primes.jpg";
import sort from "./sort.png";
import queen from "./images/queen.PNG";

export function getDetails() {
    return [
        {
            id: 1,
            title: "Pathfinder",
            description: "Visualize graph algorithms like dijkstra, BFS, DFS",
            route: "/pathfinder",
            img: graph
        },
        {
            id: 2,
            title: "Sorting Algorithm",
            description: "Compare different sorting algorithms",
            route: "/sort",
            img: sort
        },
        {
            id: 3,
            title: "Recursive Sorting",
            description: "Compare different recursive sorting algorithms",
            route: "/recursivesort",
            img: sort
        },
        {
            id: 4,
            title: "N Queen",
            description: "The N queens puzzle is the problem of placing N chess queens on an N*N chessboard so that no two queens threaten each other",
            route: "/nqueen",
            img: queen
        },
        {
            id: 5,
            title: "Prime Numbers",
            description: "Visualize how Seive is better than brute force",
            route: "/prime",
            img: primes
        }

    ]
}