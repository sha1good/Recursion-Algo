// Problem Statement: Given an undirected graph and a number m,
//  determine if the graph can be colored with at most m colors such that no two adjacent vertices
//  of the graph are colored with the same color.

function isSafe(node, color, graph, N, col) {
  for (let k = 0; k < N; k++) {
    if (k !== node && graph[k][node] === 1 && color[k] === col) {
      return false;
    }
  }
  return true;
}

function solve(node, color, m, N, graph) {
  if (node === N) {
    return true;
  }

  for (let i = 1; i <= m; i++) {
    if (isSafe(node, color, graph, N, i)) {
      color[node] = i;
      if (solve(node + 1, color, m, N, graph)) return true;
      color[node] = 0;
    }
  }
  return false;
}

// Function to determine if the graph can be colored with at most M colors such
// that no two adjacent vertices of the graph are colored with the same color.
function graphColoring(graph, m, N) {
  const color = new Array(N).fill(0);
  if (solve(0, color, m, N, graph)) return true;
  return false;
}

const N = 4;
const m = 3;

const graph = Array.from({ length: N }, () => Array(N).fill(false));
// Edges are (0, 1), (1, 2), (2, 3), (3, 0), (0, 2)
graph[0][1] = 1;
graph[1][0] = 1;
graph[1][2] = 1;
graph[2][1] = 1;
graph[2][3] = 1;
graph[3][2] = 1;
graph[3][0] = 1;
graph[0][3] = 1;
graph[0][2] = 1;
graph[2][0] = 1;

//   Output: 1

// Time Complexity: O( N^M) (n raised to m)

// Space Complexity: O(N)
console.log(graphColoring(graph, m, N));
