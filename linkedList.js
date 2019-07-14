/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;

  function getHead() {
    return head;
  }

  function getTail() {
    return tail;
  }

  function add(value) {
    let newNode = {
      value: value,
      next: null
    };

    if (!head) {
      head = newNode;
      tail = newNode;
      return newNode;
    }
    let currentNode = head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    tail = newNode;
  }

  function get(n) {
    // starting point
    let currentNode = head;
    // i = 0 = starting index
    let i = 0;

    // check if current index is less than desired index & currentNode (to make sure there is even a currentNode)
    while (i < n && currentNode !== null) {
      currentNode = currentNode.next;
      i++;
    }
    if (currentNode == null) {
      return false;
    }
    return currentNode;
  }

  function remove(n) {
    let currentNode = head;

    if (currentNode == null || currentNode.next == null) return null;

    //delete first node

    if (n == 0) {
      let temp = currentNode.data;
      currentNode = currentNode.next;
      return temp;
    }

    let previousNode = null;

    let i = 0;

    while (i < n && currentNode !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      i++;
    }

    if (currentNode !== null) {
      previousNode.next = currentNode.next;
      return currentNode.data;
    }
  }

  function insert() {}

  return {
    getHead,
    getTail,
    add,
    get,
    remove,
    insert
  };
}
