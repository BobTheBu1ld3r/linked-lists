import Node from "./Node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) this.head = newNode;
    else this.appendNode(this.head, newNode);
  }

  appendNode(node, newNode) {
    if (node.nextNode === null) node.nextNode = newNode;
    else this.appendNode(node.nextNode, newNode);
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  toString() {
    if (this.head === null) console.log("null");
    console.log(this.printNode(this.head));
  }

  printNode(node) {
    if (node.nextNode === null) return `(${node.value}) -> (null)`;
    else return `(${node.value}) -> ` + this.printNode(node.nextNode);
  }

  size() {
    if (this.head === null) return 0;
    else return this.countNodes(this.head);
  }

  countNodes(node) {
    if (node.nextNode === null) return 1;
    else return 1 + this.countNodes(node.nextNode);
  }

  getHead() {
    return this.head;
  }

  tail() {
    if (this.head === null) return null;
    else return this.getTail(this.head);
  }

  getTail(node) {
    if (node.nextNode === null) return node;
    else return this.getTail(node.nextNode);
  }

  at(index) {
    if (this.head === null) return undefined;
    return this.findNode(this.head, index);
  }

  findNode(node, index) {
    if (index === 0) return node;
    else if (node.nextNode === null) return undefined;
    else return this.findNode(node.nextNode, index - 1);
  }

  pop() {
    if (this.head === null) return;
    else this.removeTail(this.head);
  }

  removeTail(node) {
    if (node.nextNode.nextNode === null) node.nextNode = null;
    else this.removeTail(node.nextNode);
  }

  contains(value) {
    if (this.head === null) return false;
    else return this.checkList(this.head, value);
  }

  checkList(node, value) {
    if (node.value === value) return true;
    if (node.nextNode === null) return false;
    else return this.checkList(node.nextNode, value);
  }

  find(value) {
    if (this.head === null) return null;
    else return this.findIndex(0, value, this.head);
  }

  findIndex(index, value, node) {
    if (node == undefined) return null;
    if (node.value === value) return index;
    else return this.findIndex(index + 1, value, node.nextNode);
  }

  insertAt(value, index) {
    const newNode = new Node(value);
    if (this.head === null) return null;
    else if (index === 0) {
      const temp = { ...this.head };
      this.head.value = value;
      this.head.nextNode = temp;
      return;
    } else return this.insertAtIndex(newNode, index, this.head);
  }

  insertAtIndex(newNode, index, node) {
    if (node == undefined) return "Out of range";
    if (index < 0) return "Out of range";

    if (index === 1) {
      newNode.nextNode = node.nextNode;
      node.nextNode = newNode;
    } else {
      this.insertAtIndex(newNode, index - 1, node.nextNode);
    }
  }

  removeAt(index) {
    if (this.head === null) return null;
    else if (index === 0) {
      this.head = this.head.nextNode;
      return;
    } else return this.removeAtIndex(index, this.head);
  }

  removeAtIndex(index, node) {
    if (node == undefined) return "Out of range";
    if (index < 0) return "Out of range";

    if (index === 1) {
      node.nextNode = node.nextNode.nextNode;
    } else {
      this.removeAtIndex(index - 1, node.nextNode);
    }
  }
}
