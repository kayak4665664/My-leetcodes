function runningSum ( nums: number[] ): number[] {
  let sum: number = nums[ 0 ];
  let end: number = nums.length;
  for ( let i: number = 1; i < end; ++i ) {
    nums[ i ] += sum;
    sum = nums[ i ];
  }
  return nums;
};