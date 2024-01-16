let res = Infinity;

function diff(a: string, b: string): number {
  let res = 0;
  for (let i = 0; i < 8; ++i) {
    if (a[i] !== b[i]) ++res;
  }
  return res;
}

function dfs(gene: string, endGene: string, bank: string[], depth: number, visited: Set<string>): void {
  if (gene === endGene) {
    if (depth < res) res = depth;
    return;
  }
  for (let b of bank) {
    if (diff(gene, b) === 1 && !visited.has(b)) {
      visited.add(b);
      dfs(b, endGene, bank, depth + 1, visited);
      visited.delete(b);
    }
  }
}

function minMutation(startGene: string, endGene: string, bank: string[]): number {
  res = Infinity;
  dfs(startGene, endGene, bank, 0, new Set());
  if (res === Infinity) return -1;
  else return res;
};