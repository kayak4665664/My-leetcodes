function snakesAndLadders(board: number[][]): number {
  let n = board.length;

  let index = (x: number, y: number) => (n - 1 - x) * n + ((n - 1 - x) % 2 === 1 ? n - y : y + 1);
  let list: number[] = new Array(n * n + 1).fill(-1);
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      list[index(i, j)] = board[i][j];
    }
  }

  let map: Map<number, number> = new Map();
  let q: number[] = [];
  q.push(1);
  map.set(1, 0);

  while (q.length) {
    let node = q.shift()!;
    let end = Math.min(node + 6, n * n);
    let step = map.get(node)!;
    for (let i = node + 1; i <= end; ++i) {
      if (list[i] === -1) {
        if (!map.has(i) || map.get(i)! > step + 1) {
          q.push(i);
          map.set(i, step + 1);
        }
      } else {
        if (!map.has(list[i]) || map.get(list[i])! > step + 1) {
          q.push(list[i]);
          map.set(list[i], step + 1);
        }
      }
    }
  }

  return map.get(n * n) || -1;
};