const Node = require('./node');

class LinkedList {
    constructor() {
    this._head = null;
    this._tail = null;
    this.length = 0;
    }

    append(data) {
    var node = new Node(data);
    if (!this._head) {
    this._head = node;
    this._tail = node;
    } else {
    node.prev = this._tail;
    this._tail.next = node;
    this._tail = node;		
    }
    this.length++; 
    }

    head() {
    return this._head.data;
    }

    tail() {
    return this._tail.data;
    }

    at(index) {
    var currentNode = this._head;
    for (var i = 0; i < index; i++) {
	currentNode = currentNode.next;
	}
    return currentNode;
    }

    insertAt(index, data) {
    if (index>this.length) {
	return "Index out of length";
    }
    var node = new Node(data);
    if (index === 0 && this.length>2) {
    node.next = this._head;
    this._head.prev = node;
    this._head = node;
    }
    else if (index === 0 && this.length ===1) {
    node.next = this._tail;
    this._head = node;
    this._tail.prev = this._head;
    }
    else if ((index === 0) || ((index!= 1) && (index === this.length))) {
    return this.append(data);
    } 
    else {
    var previousNode = this._head;
    for (var i = 0; i < index-1; i++) {
    previousNode = previousNode.next;
    }
    var currentNode = previousNode.next;
    currentNode.prev = node;
    node.prev = previousNode;
    node.next = currentNode;
    previousNode.next = node;
    }
    this.length++;
    }

    isEmpty() {
    if (!this._head) {
    return true;
    } else {
    return false;
    }
    }

    clear() {}

    deleteAt(index) {
    if (index > this.length) {
    return "Out of length";
    }
    var currentNode = this._head;
    for (var i = 0; i < index-1; i++) {
    currentNode = currentNode.next;
    }
    if ((currentNode === this._head) && (currentNode === this._tail)) {
    this._head = null;
    this._tail = null;
    }
    else if (currentNode === this._head) {
    this._tail = currentNode.next;
    currentNode.prev = null;
    }
    else if (currentNode === this._tail) {
    this._tail = currentNode.prev;
    currentNode.next = null;
    }
    else {
    currentNode.prev.next = currentNode.next;
    currentNode.next.prev = currentNode.prev; 
    }
    this.length --;
    }

    reverse() {}

    indexOf(data) {
    var currentNode = this._head;
    var i = 0;
    for (; i < this.length; i++) {
    if (currentNode.data != data)
	currentNode = currentNode.next;
	}
    return i;
    }
}

module.exports = LinkedList;
