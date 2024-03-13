function twoSum(numbers: number[], target: number): number[] {
  let left = 0, right = numbers.length - 1;
  while (left < right) {
    let num = numbers[left] + numbers[right];
    if (num === target) break;
    else if (num < target) ++left;
    else --right;
  }
  return [left + 1, right + 1];
};