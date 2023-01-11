class Heap {
    constructor(){
        this.data = [];
    }
    getParanteIndex(i){
        return Math.floor((i-1)/2)
    }
    getLeftChildIndex(i){
        return i*2+1;
    }
    getRightChild(i){
        return i*2+2;
    }
    swap(i1,i2){
        const temp = this.data[i1]
        this.data[i1] = this.data[i2]
        this.data[i2] = temp
    }
    push(key){
        this.data[this.data.length] = key
        this.heapifyUp()
    }
    heapifyUp(){
        let currentIndex = this.data.length-1;
        while(this.data[currentIndex]>this.data[this.getParanteIndex(currentIndex)]){
            this.swap(currentIndex,this.getParanteIndex(currentIndex))
            currentIndex = this.getParanteIndex(currentIndex)
        }
    }
    poll() {
        const maxvalue = this.data[0];
        this.data[0] = this.data[this.data.length - 1];
        this.data.length--;
        this.heapifyDown();
        return maxvalue;
      }
    
      heapifyDown() {
        let currentIndex = 0;
        while (this.data[this.getRightChild(currentIndex)] !== undefined) {
          let biggestChldIndex = this.getLeftChildIndex(currentIndex);
          if (
            this.data[this.getRightChild(currentIndex)] !== undefined &&
            this.data[this.getRightChildIndex(currentIndex)] >
              this.data[this.getLeftChildIndex(currentIndex)]
          ) {
            biggestChldIndex = this.getRightChildIndex(currentIndex);
          }
    
          if (this.data[currentIndex] < this.data[biggestChldIndex]) {
            this.swap(currentIndex, biggestChldIndex);
            currentIndex = biggestChldIndex;
          } else {
            return;
          }
        }
      }
      search(key){
        let currentIndex = this.data.length
      }
}

const heap = new Heap()

heap.push(20)
heap.push(5)
heap.push(40)
heap.push(70)
heap.push(90)
heap.push(44)

console.log(heap.data.join(','))

let a = []
a.push(heap.poll())
a.push(heap.poll())
a.push(heap.poll())
a.push(heap.poll())
a.push(heap.poll())

console.log("Arry:",a)

console.log(heap.data.join(','))

