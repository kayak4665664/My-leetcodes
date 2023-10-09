/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes ( nums: number[] ): void {
  let i = 0, j = 1, len = nums.length;
  while ( i < len && j < len ) {
    if ( nums[ i ] == 0 && nums[ j ] != 0 ) {
      let temp = nums[ i ];
      nums[ i ] = nums[ j ];
      nums[ j ] = temp;

    }
    if ( nums[ i ] != 0 ) ++i;
    if ( j < i ) j = i;
    else if ( nums[ j ] == 0 ) ++j
  }
};