function heapify(arr, n, i) {
    let largest = i; 
    let l = 2 * i + 1; 
    let r = 2 * i + 2; 
  
    if (l < n && arr[l] > arr[largest]) 
        largest = l; 
  
    if (r < n && arr[r] > arr[largest]) 
        largest = r; 
  
    if (largest !== i) { 
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; 
        heapify(arr, n, largest); 
    } 
} 

function buildHeap(arr) { 
    let n = arr.length; 
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) 
        heapify(arr, n, i); 
}

function heapSort(arr) {
    buildHeap(arr);
    let n = arr.length;
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    return arr;
}


let arr = [5,3,8,4,9,1,6,2,7];
let sortedArr = heapSort(arr);
console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
