function thirdMax ( nums: number[] ): number {
  let a = -Infinity, b = -Infinity, c = -Infinity;
  for ( let n of nums ) {
    if ( n > a || n > b && n < a || n > c && n < b ) c = n;
    if ( c > b ) {
      let t = c;
      c = b;
      b = t;
    }
    if ( b > a ) {
      let t = b;
      b = a;
      a = t;
    }
  }
  if ( c != -Infinity ) return c;
  else return a;
};