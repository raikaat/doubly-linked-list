const Node = require('./node');

class LinkedList {
    constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    }

    append(data) {
    var node = new Node(data);
    if (!this.head) {
    this.head = node;
    this.tail = node;
    } else {
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;		
    }
    this.length++; 
    }

    head() {
    return this.head;
    }

    tail() {
    return this.tail;
    }

    at(index) {
    var currentNode = this.head;
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
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    }
    else if (index === 0 && this.length ===1) {
    node.next = this.tail;
    this.head = node;
    this.tail.prev = this.head;
    }
    else if ((index === 0) || ((index!= 1) && (index === this.length))) {
    return this.append(data);
    } 
    else {
    var previousNode = this.head;
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
    if (!this.head) {
    return -1;
    } else {
    retrun "Not empty";
    }
    }

    clear() {}

    deleteAt(index) {
    if (index > this.length) {
    return "Out of length";
    }
    var currentNode = this.head;
    for (var i = 0; i < index-1; i++) {
    currentNode = currentNode.next;
    }
    if ((currentNode === this.head) && (currentNode === this.tail)) {
    this.head = null;
    this.tail = null;
    }
    else if (currentNode === this.head) {
    this.tail = currentNode.next;
    currentNode.prev = null;
    }
    else if (currentNode === this.tail) {
    this.tail = currentNode.prev;
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
    var currentNode = this.head;
    var i = 0;
    for (; i < this.length; i++) {
    if (currentNode.data != data)
	currentNode = currentNode.next;
	}
    return i;
    }
}

module.exports = LinkedList;
