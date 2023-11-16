let arr = [4, 3, 1, 5, 6, 9];

function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
//传统三件套
//冒泡 稳定
for(let i = 0; i < arr.length - 1; i++){
    for(let j = 0; j < arr.length - 1 - i; j++){
        if(arr[j] > arr[j + 1]){
            swap(arr, j, j + 1)
        }
    }
}
//选择
for(let i = 0; i < arr.length - 1; i++){
    for(let j = i + 1; j < arr.length; j++){
        if(arr[i] > arr[j]){
            swap(arr, i, j)
        }
    }
}
//插入 稳定
for(let i = 1; i < arr.length; i++){
    for(let j = i; j > 0 && arr[j - 1] > arr[j]; j--){
        swap(arr, j , j - 1)
    }
}
//归并 稳定
function mergeSort(arr){
    var len = arr.length;
    let middle = Math.floor(len / 2);
    return merge(mergeSort(arr.slice(0, middle), mergeSort(middle)))
}
function merge(left, right){
    var res = [];

    while(left.length && right.length){
        if(left[0] <= right[0]){
            res.push(left.shift())
        }else{
            res.push(right.shift())
        }
    }
    while(left.length){
        res.push(left.shift())
    }
    while(right.length){
        res.push(right.shift())
    }

    return res
}

//快排
let quickSort = (arr, left, right) =>{
    if(left >= right){
        return
    }
    let pivot = arr[left];
    let i = left, j = right;

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
    quickSort(arr, left, i - 1)
    quickSort(arr, i + 1, right)
}
quickSort(arr, 0, arr.length - 1)

//堆排序    
class MaxHeap{
    constructor(arr = []){
        this.container = []
        if(Array.isArray(arr)){
            arr.forEach(this.insert.bind(this))
        }
    }

    insert(data){
        const { container } = this;
        let index = container.length - 1
        while(index){
            let parent = Math.floor((index - 1) / 2)
            if(container[parent] >= container[index]){
                break;
            }
            swap[container, parent, index]
            index = parent
        }
    }

    extract(){
        const {container} = this;
        if(!container.length){
            return null
        }
        swap[container, 0, container.length - 1]
        const res = container.pop();

        let ind = 0,
            exchange = ind * 2 + 1;
        while(ind < container.length){
            let right = ind * 2 + 2;
            if(right < container.length && container[right] > container[exchange]){
                exchange = right
            }
            if(container[right] <= container[ind]){
                break;
            }
            swap[container, exchange, ind]
            ind = exchange
            exchange = ind * 2 + 1
        }

        return res
    }

    top(){
        const { container } = this
        if(container.length){
            return container[0]
        }
        return null
    }
}

const length = arr.length;
const heap = new MaxHeap(arr.slice(0, k));
for (let i = k; i < length; ++i) {
    if (heap.top() > arr[i]) {
        heap.extract();
        heap.insert(arr[i]);
    }
}
heap.container;


//基数排序 稳定
//希尔排序