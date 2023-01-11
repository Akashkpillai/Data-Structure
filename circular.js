class Circular{
    constructor(capacity){
        this.items = new Array(capacity)
        this.capacity = capacity
        this.length = 0
        this.rear = -1
        this.front = -1
    }
    isFull(){
        return this.length === this.capacity
    }
    isEmpty(){
        return this.length === 0
    }


    enqueue(value){
        if(!this.isFull()){
            this.rear = (this.rear+1)%this.capacity
            this.items[this.rear] = value
            this.length += 1
            if(this.front === -1){
                this.front = this.rear
            }
        }
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front+1)%this.capacity
        this.length -= 1
        if(this.isEmpty()){
            this.front = -1
            this.rear = -1
        }
        return item
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null
    }
    print(){
        let i
        let str = ''
        for(i = this.front; i !== this.rear ; i= (i+1)%this.capacity){
            str += this.items[i]+ " "
        }
        str = str + this.front
        console.log(str)
    }

}

const cir = new Circular(5)

console.log(cir.isEmpty());

cir.enqueue(10)
cir.enqueue(20)
cir.enqueue(30)
cir.enqueue(40)
cir.enqueue(50)
cir.print()
