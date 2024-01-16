
interface trieNode {
  val: string;
  isEnd: boolean;
  sons: trieNode[];
};

class Trie {

  root: trieNode;

  constructor() {
    this.root = {
      val: "",
      isEnd: false,
      sons: [],
    };
  }

  insert(word: string): void {
    let ptr = this.root;

    let len = word.length;
    for (let i = 0; i < len; ++i) {

      let flag = false;

      let sons = ptr.sons;
      for (let son of sons) {
        if (son.val === word[i] && (son.isEnd === false && i < len - 1 || son.isEnd === true && i === len - 1)) {
          flag = true;
          ptr = son;
          break;
        }
      }
      if (!flag) {
        let newSon = {
          val: word[i],
          isEnd: i === len - 1 ? true : false,
          sons: [],
        };
        ptr.sons.push(newSon);
        ptr = newSon;
      }
    }
  }

  search(word: string): boolean {
    let res = true;

    let ptr = this.root;

    let len = word.length;
    for (let i = 0; i < len; ++i) {

      let flag = false;

      let sons = ptr.sons;
      for (let son of sons) {
        if (son.val === word[i] && (son.isEnd === false && i < len - 1 || son.isEnd === true && i === len - 1)) {
          flag = true;
          ptr = son;
          break;
        }
      }
      if (!flag) {
        res = false;
        break;
      }
    }

    return res;
  }

  startsWith(prefix: string): boolean {
    let res = true;

    let ptr = this.root;

    let len = prefix.length;
    for (let i = 0; i < len; ++i) {

      let flag = false;

      let sons = ptr.sons;
      for (let son of sons) {
        if (son.val === prefix[i] && (son.isEnd === false && i < len - 1 || i === len - 1)) {
          flag = true;
          ptr = son;
          break;
        }
      }
      if (!flag) {
        res = false;
        break;
      }
    }

    return res;
  }
}