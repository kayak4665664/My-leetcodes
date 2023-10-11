class MyLinkedList {

  val: number | undefined;
  next: MyLinkedList | undefined;
  prior: MyLinkedList | undefined;


  constructor () {
    this.val = undefined;
    this.next = undefined;
    this.prior = undefined;
  }

  get ( index: number ): number {
    if ( index == 0 ) return this.val != undefined ? this.val : -1;
    else if ( !this.next ) return -1;
    else {
      let ptr = this.next, i = 1;
      while ( i < index && ptr.next ) {
        ptr = ptr.next;
        ++i;
      }
      if ( i == index ) return ptr.val != undefined ? ptr.val : -1;
      else return -1;
    }
  }

  addAtHead ( val: number ): void {
    if ( this.val == undefined ) this.val = val;
    else {
      const next = new MyLinkedList();
      next.val = this.val;
      next.next = this.next;
      if ( next.next ) next.next.prior = next;
      next.prior = this;
      this.val = val;
      this.next = next;
      this.prior = undefined;
    }
  }

  addAtTail ( val: number ): void {
    if ( this.val == undefined ) this.val = val;
    else {
      const tail = new MyLinkedList();
      tail.val = val;
      let ptr = this.next;
      if ( !ptr ) {
        this.next = tail;
        tail.prior = this;
      } else {
        while ( ptr.next ) ptr = ptr.next;
        ptr.next = tail;
        tail.prior = ptr;
      }
    }
  }

  addAtIndex ( index: number, val: number ): void {
    if ( index == 0 ) this.addAtHead( val );
    else {
      if ( !this.next ) {
        if ( index == 1 && this.val != undefined ) this.addAtTail( val );
        else return;
      } else {
        let i = 1, ptr = this.next;
        while ( i < index && ptr.next ) {
          ++i;
          ptr = ptr.next;
        }
        if ( i == index ) {
          const prior = new MyLinkedList();
          prior.val = val;
          if ( ptr.prior ) {
            ptr.prior.next = prior;
            prior.prior = ptr.prior;
          }
          prior.next = ptr;
          ptr.prior = prior;
        } else if ( i + 1 == index ) {
          const tail = new MyLinkedList();
          tail.val = val;
          ptr.next = tail;
          tail.prior = ptr;
        }
      }
    }
  }


  deleteAtIndex ( index: number ): void {
    if ( index == 0 ) {
      if ( this.next ) {
        this.val = this.next.val;
        this.next = this.next.next;
        if ( this.next ) this.next.prior = this;
      } else this.val = undefined;
    } else if ( !this.next ) return;
    else {
      let i = 1, ptr = this.next;
      while ( i < index && ptr.next ) {
        ++i;
        ptr = ptr.next;
      }
      if ( i == index && ptr.prior ) {
        if ( ptr.next ) {
          ptr.prior.next = ptr.next;
          ptr.next.prior = ptr.prior;
        } else ptr.prior.next = undefined;
      }
    }
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */