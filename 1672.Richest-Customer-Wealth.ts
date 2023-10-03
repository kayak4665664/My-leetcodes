function maximumWealth ( accounts: number[][] ): number {
  function sum ( account: number[] ): number {
    let res: number = 0;
    for ( let amount of account ) res += amount;
    return res;
  }
  let max: number = -1;
  for ( let account of accounts )
    max = Math.max( max, sum( account ) )
  return max;
};