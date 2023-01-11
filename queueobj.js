class Queue{
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }
    enqueue(value){
        this.items[this.rear] = value
        this.rear ++
    }
    dequeue(){
       const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }
    print(){
        console.log(this.items)
    }
    size(){
        return this.rear - this.front
    }
    peek(){
        return this.items[this.front]
    }
    isEmpty(){
        return this.rear - this.front === 0;
    }
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.print()
console.log("Is List empty?",queue.isEmpty());
// queue.dequeue()
console.log("Size",queue.size());
queue.peek()
console.log("Peek =",queue.peek());



