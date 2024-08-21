class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.first_name = ""
  }
}

let node1 = new Node(5);
let node2 = new Node(10);
let node3 = new Node(15);
let node4 = new Node(20);

node1.next = node2;
node2.next = node3;
node2.next = node4;
node4.next = node3;


let current = node1;
while(current !== null){
    console.log(current)
    current = current.next;
}