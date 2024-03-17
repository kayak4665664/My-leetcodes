class Char {
  char: string;
  next: Char[] | null;
  isEnd: boolean;
  constructor(char: string, isEnd: boolean) {
    this.char = char;
    this.next = null;
    this.isEnd = isEnd;
  }
}

class WordDictionary {

  root: Char;

  constructor() {
    this.root = new Char('', false);
  }

  dfs(node: Char, str: string): void {
    let char = str[0];
    let isEnd = str.length > 1 ? false : true;

    let next: Char | null = null;
    if (!node.next) {
      node.next = [];
      next = new Char(char, isEnd);
      node.next.push(next);
    } else {
      for (let i = 0; i < node.next.length; ++i) {
        if (node.next[i].char === char && node.next[i].isEnd === isEnd) {
          next = node.next[i];
          break;
        }
      }
      if (!next) {
        next = new Char(char, isEnd);
        node.next.push(next);
      }
    }
    if (!isEnd) this.dfs(next, str.substring(1));
  }

  addWord(word: string): void {
    this.dfs(this.root, word);
  }

  search(word: string): boolean {
    let index = -1;
    let q: Char[] = [];
    q.push(this.root);

    while (q.length) {
      let char = word[index + 1];
      let isEnd = index === word.length - 2 ? true : false;
      let len = q.length;
      let temp = index;
      for (let i = 0; i < len; ++i) {
        let node = q.shift()!;
        if (char != '.') {
          let flag = false;
          if (node.next) {
            for (let j = 0; j < node.next.length; ++j) {
              if (node.next[j].char === char && node.next[j].isEnd === isEnd) {
                flag = true;
                q.push(node.next[j]);
                break;
              }
            }
          }
          if (flag) index = temp + 1;
        } else {
          if (node.next) {
            for (let j = 0; j < node.next.length; ++j) {
              if (node.next[j].isEnd === isEnd) {
                q.push(node.next[j]);
                index = temp + 1;
              }
            }
          }
        }
      }

    }
    return index === word.length - 1 ? true : false;
  }
}