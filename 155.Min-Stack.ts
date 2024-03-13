interface element {
  val: number;
  min: number;
}

class MinStack {

  min: number;
  len: number;
  stack: element[];

  constructor() {
    this.min = Infinity;
    this.stack = [];
    this.len = 0;
  }

  push(val: number): void {
    this.stack.push({ val: val, min: this.min });
    this.len += 1;
    if (val < this.min) this.min = val;
  }

  pop(): void {
    this.min = this.stack[this.len - 1].min;
    this.stack.pop();
    this.len -= 1;
  }

  top(): number {
    return this.stack[this.len - 1].val;
  }

  getMin(): number {
    return this.min;
  }
}