class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.size  = 0
    }
    isEmpty() {
        return this.size === 0  
    }

    getSize(){
        return this.size
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    insert(value,index){
        if(index<0||index>this.size){
            return
        }
        if(index ===0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
            let curr = this.head
            let listValue = ''
            while(curr){
                listValue += `${curr.value} `
                curr = curr.next
            }
            console.log(listValue)
        }
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    removedFrom(index){
        let removedNode
        if(index<0 || index>=this.size){
            return null
        }if(index===0){
            removedNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i =0 ;i < index-1 ; i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size --
        return removedNode.value
    }
    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size --
            return value
        }
        else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                let removedNode = prev.next
                prev.next = removedNode.next
                this.size -- 
                return value
            }
            return console.log('Value is node found')
        }
    }
    search(value){
        if(this.isEmpty()){
            return console.log("List is Empty")
        }
        let i = 0
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }
    reverse(){
        let curr = this.head
        let prev = null
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    removeAtfirst(){
        let curr = this.head
        this.head = curr.next
        this.size --
        return curr.value
    }
}


module.exports = linkedList
// const list = new linkedList()
// console.log('List is empty',list.isEmpty())
// console.log('Size',list.getSize())


// list.insert(10,0)
// // list.print()
// list.insert(20,0)
// // list.print()
// list.insert(30,1)
// // list.print()
// list.insert(40,2)
// list.print()

// // console.log(list.removedFrom(0))
// // list.print()
// // console.log(list.getSize())

// // console.log(list.removedFrom(1))
// // list.print()

// // list.removeValue(20)
// // list.print()
// // console.log(list.getSize())


// // console.log(list.search(60))
// list.reverse()
// list.print()
