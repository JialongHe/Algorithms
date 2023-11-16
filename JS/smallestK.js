function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

class MaxHeap{
    constructor(arr = []){
        this.container = []
        if(Array.isArray(arr)){
            arr.forEach(this.insert.bind(this));
        }
    }

    insert(data){
        const {container} = this;
        container.push(data);
        let index = container.length - 1;
        while (index) {
            let parent = Math.floor((index - 1) / 2);
            if (container[index] <= container[parent]) {
                break;
            }
            swap(container, index, parent);
            index = parent;
        }
    }

    extract(){
        const { container } = this;
        if (!container.length) {
            return null;
        }

        swap(container, 0, container.length - 1);
        const res = container.pop();
        const len = container.length;

        let ind = 0,
            exchange = ind * 2 + 1;
        
        while(exchange < len){
            let right = ind * 2 + 2;
            if(right < len && container[right] > container[exchange]){
                exchange = right
            }
            if(container[exchange] <= container[ind]){
                break
            }
            swap(container, exchange, ind);
            ind = exchange;
            exchange = ind * 2 + 1;
        }
        
        return res
    }

    top(){
        if(this.container.length){
            return this.container[0]
        }
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

/*
var smallestK = function (arr, k) {
    const quickSort = function (arr, left, right) {
      if (left >= right) {
          return;
      }
      let i = left;
      let j = right;
      let key = arr[left];
      while (i < j) {
          while (i < j && arr[j] >= key) {
              j--;
          }
          arr[i] = arr[j];
          while (i < j && arr[i] <= key) {
              i++;
          }
          arr[j] = arr[i];
      }
      arr[i] = key;
      if (i === k - 1) {
          return;
      } else if (k - 1 < i) {
          quickSort(arr, left, i - 1);
      } else {
          quickSort(arr, i + 1, right);
      }
  }

  quickSort(arr, 0, arr.length - 1);
  return arr.slice(0, k);
};

var ar = [10,2, 3, 5, 21, 15, 9, 7, 19]
var quickS = (arr, left, right) =>{
    if(left >= right){
        return
    }
    let i = left, j = right;
    let pivot = arr[left];
    while(i < j){
        while(i < j && arr[j] >= pivot){
            j--;
        }
        arr[i] = arr[j];
        while(i < j && arr[i] <= pivot){
            i++;
        }
        arr[j] = arr[i]
    }
    arr[i] = pivot

    quickS(arr, left, i - 1)
    quickS(arr, right, i + 1)
}  
quickS(ar, 0, ar.length - 1)

console.log(ar)
*/