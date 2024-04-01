interface LinkNode {
  prior: LinkNode | null;
  next: LinkNode | null;
  key: number;
};

class LRUCache {

  map: Map<number, number>;
  link: Map<number, LinkNode>;
  first: LinkNode | null;
  last: LinkNode | null;
  capacity: number;

  constructor(capacity: number) {
    this.map = new Map();
    this.link = new Map();
    this.first = null;
    this.last = null;
    this.capacity = capacity;
  }

  get(key: number): number {
    if (this.map.has(key)) {
      const value = this.map.get(key)!;
      let newFirst: LinkNode = this.link.get(key)!;
      if (this.first !== newFirst) {
        let priorOfNewFirst = newFirst.prior!;
        let nextOfNewFirst = newFirst.next;
        priorOfNewFirst.next = nextOfNewFirst;
        if (nextOfNewFirst) nextOfNewFirst.prior = priorOfNewFirst;
        if (this.last === newFirst) this.last = newFirst.prior;
        newFirst.prior = null;
        newFirst.next = this.first;
        this.first!.prior = newFirst;
        this.first = newFirst;
      }
      return value;
    } else return -1;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      this.map.set(key, value);
      let newFirst: LinkNode = this.link.get(key)!;
      if (this.first !== newFirst) {
        let priorOfNewFirst = newFirst.prior!;
        let nextOfNewFirst = newFirst.next;
        priorOfNewFirst.next = nextOfNewFirst;
        if (nextOfNewFirst) nextOfNewFirst.prior = priorOfNewFirst;
        if (this.last === newFirst) this.last = newFirst.prior;
        newFirst.prior = null;
        newFirst.next = this.first;
        this.first!.prior = newFirst;
        this.first = newFirst;
      }
    } else {

      if (this.map.size >= this.capacity) {
        let newRemoved = this.last!;
        this.last = newRemoved.prior;
        if (this.last) this.last.next = null;
        if (this.first === newRemoved) this.first = null;
        this.link.delete(newRemoved.key);
        this.map.delete(newRemoved.key);
      }

      this.map.set(key, value);
      let newFirst: LinkNode = { prior: null, next: this.first, key };
      if (this.first) this.first.prior = newFirst;
      this.first = newFirst;
      if (!this.last) this.last = newFirst;
      this.link.set(key, newFirst);
    }
  }
}