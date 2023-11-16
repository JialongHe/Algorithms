class MaxHeap{
    constructor(arr = []){
        this.container = [];
        if(Array.isArray(arr)){
            arr.forEach(this.insert.bind(this))
        }
    }

    insert(data){
        const {container} = this;

        container.push(data);
        let index = container.length - 1;
        while(index){
            
        }
    }

    extract(){
        const {container} = this;
        if(!container.length){
            return null
        }
        
     }

    top(){
        if(this.container.length)   return this.container[0];
        return null
    }
}


var getLeastNumbers = function(arr, k) {
    const length = arr.length;
    if (k >= length) {
        return arr;
    }

    const heap = new MaxHeap(arr.slice(0, k));
    for (let i = k; i < length; ++i) {
        if (heap.top() > arr[i]) {
            heap.extract();
            heap.insert(arr[i]);
        }
    }
    return heap.container;
};