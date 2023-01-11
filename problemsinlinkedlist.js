class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size===0;
    }
    getsize(){
        return this.size
    }

    gtlng(){
        let length = 0
        let curr = this.head
        while(curr !== null){
        length++
        curr = curr.next
        }
        console.log("len = ",length)
    }

    findTheMiddle(){
        let curr = this.head

        console.log(curr.value);
        let c = 0

        while(curr != null){
            c ++
            curr = curr.next
        }
        console.log("count =",c)

        let n = c/2;
        let temp = this.head

        for(let i =1 ; i<=n; i++){
            
            temp = temp.next
        }
        console.log("xxx:",temp.value);
         
    }



    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size ++
    }

    insert(value,index){
        if(index<0||index>this.size){
            return
        }
        if(index === 0){
            return this.prepend(value)
        }else{
            const node = new Node(value)
            let curr = this.head
            for(let i=0;i<index-1;i++){
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
            this.size ++
        }
     
    }
    print(){
        let curr = this.head
        // let list = ''
        while(curr){
             console.log(curr.value)
            curr = curr.next
        }
        // console.log(list)
    }
    sum(){
        let curr = this.head
        let sum = 0 
        while(curr.next !== null){
            sum += curr.value
            curr = curr.next
        }
        console.log(sum)
    }
    sumOfAlternate(){
        let curr = this.head
        let sum = 0
        let c = 1
        while(curr != null){
            if(c%2==1){
                sum += curr.value
            }
            curr = curr.next
            c++
        }
        console.log("sum = ",sum)
    }
    removeAtfirst(){
        let curr = this.head
        this.head = curr.next
        this.size --
    }

    removeEnd() {

        let current = this.head;

        if (!this.head) {
            this.head = current.next;
        } else {
            current = this.head
            let previous;
            while (current.next) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;

        }
        this.size--;
    }

    even(){
        let curr = this.head
        while(curr != null){
            if(curr.value % 2 == 0){
                console.log("even = ",curr.value)
            }
            curr = curr.next
        }
        
    }

    odd(){
        let curr = this.head
        while(curr != null){
            if(curr.value % 2 == 1){
                console.log("Odd = ",curr.value)
            }
            curr = curr.next
        }
    }

    largestNumber(){
        let curr = this.head
        let temp = 0;
        while(curr != null){
            if(temp<curr.value){
                temp = curr.value
            }
            curr = curr.next
        }
        console.log("Largest number = ",temp)
    }

    smalleValue(){
        let curr = this.head
        let temp = curr.value;
        while(curr != null){
            if(temp>curr.value){
                temp = curr.value
            }
            curr = curr.next
        }
        console.log("Smallest Number = ",temp)
    }
    squreRoot(value){
       let curr = this.head
        let c = 0
        while(curr != null){
            if(c == value){
                let root = Math.sqrt(curr.value)
                console.log("root = ",root)
            }
            curr = curr.next
            c++
        }
    
    }

    squreOfNth(value){
        let curr = this.head
        let temp = 0
        let c = 0
        while(curr != null){
            if(c === value){
                let squr = curr.value*2
                console.log("squre = ",squr)
            }
            curr = curr.next
            c++
        }
    }
    countdupli(){
        let c = 0
        while(this.head.next != null){
            let dupli = this.head.next
            while(dupli != null){
                if(this.head.value == dupli.value){
                    c ++
                    break
                }
                dupli = dupli.next
            }
            this.head = this.head.next
        }
        console.log("Count = ",c)
    }

    dupilicate(){
        let curr = this.head
        let curr1 = this.head
        let c = 0 
        let set = new Set()
        while(curr != null){
            c = 0
            curr1 = curr.next
        while(curr1 != null){
            if(curr1.value == curr.value){
                c ++
            }
            if(c == 1){
                if(set.has(curr.value)){
                   
                }else{
                    set.add(curr.value)
                    console.log("dupli = ",curr.value);
                }
            }
            curr1 = curr1.next
        }
        curr = curr.next
     }
        set.clear()
    }
    sort(){
        let curr = this.head 
        let curr1 = this.head;
        let temp = 0 ;

     for(curr = this.head;curr != null;curr = curr.next){
        for(curr1 = this.head;curr1 != null;curr1 = curr1.next){
            if(curr.value< curr1.value){
                temp = curr.value
                curr.value = curr1.value
                curr1.value = temp
            }
        }
     }

     curr = this.head

     while(curr != null){
        console.log("sort = ",curr.value)
        curr = curr.next
     }
    }

}


const list = new linkedList()
list.insert(10,0)
list.insert(27,1)
list.insert(35,2)
list.insert(27,3)
list.insert(50,4)
list.insert(10,5)
list.insert(70,6)
// list.print()

// list.gtlng()
// list.findTheMiddle()
//  list.even()
//  list.print()
// list.odd()
// list.gtlng()
// list.largestNumber()
// list.smalleValue()
// list.squreRoot(3)
// list.squreOfNth(2)
 list.dupilicate()
// list.countdupli()
 list.sort()



// list.sumOfAlternate()


class Node {
    constructor(value){
    this.value = value
    this.next = next
}
}