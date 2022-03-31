function convertToAdjList(intervals) {
  const graph = {};
  for (let n of intervals) {
    const [a, b] = n;
    if (!(b in graph)) graph[b] = [];
    graph[b].push(a);
  }
  return graph;
}

function dfs(graph, v, visited, result, marked) {
  if (marked[v]) return true;
  if (visited[v]) return false;

  visited[v] = true;
  marked[v] = true;
  for (let n of graph[v] || []) {
    if (dfs(graph, n, visited, result, marked)) return true;
  }
  result.push(v);
  marked[v] = false;
  return false;
}

var findOrder = function (numCourses, prerequisites) {
  const graph = convertToAdjList(prerequisites);
  const visited = new Array(numCourses).fill(false);
  const marked = new Array(numCourses).fill(false);
  let isCycle = false;

  const result = [];

  for (let s = 0; s < numCourses; s++) {
    isCycle = dfs(graph, s, visited, result, marked);
    if(isCycle) break
  }
  return isCycle ? [] : result.reverse();
};

