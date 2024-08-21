class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let node1 = new Node(2);
let node2 = new Node(5);
let node3 = new Node(7);

// How to link the nodes together
node1.next = node2;
node2.next = node3;

// If I wanted to loop thorugh the linked list, how would I do that?
let current = node1;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}

// Let's Create a SLL class
class SLL {
  constructor() {
    this.head = null;
  }

  // Add a node to the end of the list
  addNode(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Add a node to the front of the list
  addFront(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Remove the first node in the list
  removeFront() {
    if (this.head !== null) {
      this.head = this.head.next;
    }
  }

  // Remove the last node in the list
  removeBack() {
    if (this.head === null) {
      return;
    } else if (this.head.next === null) {
      this.head = null;
    } else {
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
    }
  }

  // Display all the nodes in the list
  display() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  // Return the number of nodes in the list
  size() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Return the value of the first node in the list
  front() {
    if (this.head === null) {
      return null;
    } else {
      return this.head.value;
    }
  }

  // Return the value of the last node in the list
  back() {
    if (this.head === null) {
      return null;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      return current.value;
    }
  }

  // Return true if the list contains a node with the given value
  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
    }
}

    // Remove the first node with the given value