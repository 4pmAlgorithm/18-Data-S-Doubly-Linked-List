//pseudo
// 1. create a new node w val passed to the function
// 2. if the head property is null set the head and tail to be the newly created node.
// 3. if not, set the next property on the tail to be that node.
// 4. set the tail to be the newly created node.
// 5. increment the length
// 6. return the doubly linkd list


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
    push(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length ++
        return this
    }
}

list = new DoublyLinkedList()
list.push(90)
list.push(99)
list.push(100)
list.push("last item!")
console.log(list)