const numberOfSteps = ( num: number ): number => {
  let res: number = 0;
  while ( num != 0 ) {
    if ( num % 2 == 0 ) num /= 2;
    else num -= 1;
    ++res;
  }
  return res;
};