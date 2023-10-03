/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge ( nums1: number[], m: number, nums2: number[], n: number ): void {
  let i = 0, end = m;
  for ( let num of nums2 ) {
    while ( i < end && nums1[ i ] < num ) ++i;
    nums1.splice( i, 0, num );
    nums1.pop();
    ++end;
  }
};