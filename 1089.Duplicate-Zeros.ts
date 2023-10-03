/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros ( arr: number[] ): void {
  let i = 0, len = arr.length;
  while ( i < len ) {
    if ( arr[ i ] != 0 ) ++i;
    else {
      arr.splice( i, 0, 0 );
      arr.pop();
      i += 2;
    }
  }
};