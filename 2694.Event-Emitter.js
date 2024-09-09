class EventEmitter {

  constructor() {
    this.event = new Map();
  }

  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {

    let callbacks = undefined;

    if (this.event.has(eventName)) {
      callbacks = this.event.get(eventName);
    } else {
      callbacks = [];
    }

    callbacks.push(callback);
    this.event.set(eventName, callbacks);

    const index = callbacks.length - 1;

    return {
      unsubscribe: () => {
        if (this.event.has(eventName)) {
          const callbacks = this.event.get(eventName);
          callbacks[index] = null;
          this.event.set(eventName, callbacks);
        }
      }
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (this.event.has(eventName)) {
      const results = [];

      const callbacks = this.event.get(eventName);

      for (let callback of callbacks) {
        if (callback !== null) {
          const res = callback(...args);
          results.push(res);
        }
      }

      return results;
    } else return [];
  }
}

/**
* const emitter = new EventEmitter();
*
* // Subscribe to the onClick event with onClickCallback
* function onClickCallback() { return 99 }
* const sub = emitter.subscribe('onClick', onClickCallback);
*
* emitter.emit('onClick'); // [99]
* sub.unsubscribe(); // undefined
* emitter.emit('onClick'); // []
*/