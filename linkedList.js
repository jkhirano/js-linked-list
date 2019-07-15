/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;

  let node = function node(value) {
    return {
      value: value,
      next: null
    };
  };

  let getHead = function getHead() {
    return head;
  };

  let getTail = function getTail() {
    return tail;
  };

  let add = function add(value) {
    let newNode = node(value);

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
  };

  let get = function get(n) {
    let currentNode = head;
    let i = 0;

    while (i < n && currentNode !== null) {
      currentNode = currentNode.next;
      i++;
    }
    if (currentNode == null) {
      return false;
    }
    return currentNode;
  };

  let remove = function remove(n) {
    let currentNode = get(n);
    let previousNode = get(n - 1);

    if (!currentNode) {
      return false;
    } else if (n === 0) {
      // if node is header
      head = currentNode.next;
    } else if (currentNode.next === null) {
      // if node is tail
      tail = previousNode;
      tail.next = null;
    } else {
      // if neither head/tail, point previous node to next node
      previousNode.next = currentNode.next;
    }
  };

  let insert = function insert(n, value) {
    let currentNode = get(n);
    let previousNode = get(n - 1);
    let insertedNode = node(value);

    if (!currentNode) {
      return false;
    } else if (n < 0) {
      return false;
    } else if (n === 0) {
      // if node is header
      insertedNode.next = head;
      head = insertedNode;
      return head;
    } else {
      insertedNode.next = currentNode;
      previousNode.next = insertedNode;
    }
  };

  return {
    getHead,
    getTail,
    add,
    get,
    remove,
    insert
  };
}
