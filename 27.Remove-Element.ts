function removeElement ( nums: number[], val: number ): number {
  let res = 0, i = 0;
  while ( i < nums.length ) {
    if ( nums[ i ] != val ) {
      ++res;
      ++i;
    }
    else nums.splice( i, 1 );
  }
  return res;
};
