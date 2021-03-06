class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}

first = new Node(12)
first.prev = new Node(11)
first.next = new Node(13)
first.next.prev = first
twelve = first
eleven = first.prev
twelve.prev = eleven
console.log(twelve)
console.log(DoublyLinkedList)