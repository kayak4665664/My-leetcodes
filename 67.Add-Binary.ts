function addBinary(a: string, b: string): string {
  let x = BigInt("0b" + a);
  let y = BigInt("0b" + b);
  let z = x + y;
  return z.toString(2);
};
