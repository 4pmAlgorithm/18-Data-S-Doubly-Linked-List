// 1. if there is no head, return undefined
// 2. store the current tail in a variable to return later
// 3. if the length is 1, set the head and tail to be null
// 4. update the tail to be the previous Node
// 5. set the newTail's next to null
// 6. Decrement the length
// 7. return the vale removed

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
        this.length++
        return this
    }



// 1. if there is no head, return undefined
// 2. store the current tail in a variable to return later
// 3. if the length is 1, set the head and tail to be null
// 4. update the tail to be the previous Node
// 5. set the newTail's next to null
    //5-1. set the this tail's prev to null
// 6. Decrement the length
// 7. return the vale removed

    pop(){
        if(!this.head) return undefined;
        let poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null; //need to remove both connections
        }
        this.length--;
        return poppedNode;
    }
}



list = new DoublyLinkedList()
list.push(10)
list.push(20)
list.push(30)
list.push("last item!")

console.log("!!pop", list.pop())
console.log("!!pop", list.pop())
console.log("!!pop", list.pop())

console.log(list)