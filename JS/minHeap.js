function minHeap(arr = []){
    this.insert = (item) => {
        let { container } = this
        container.push(item)
        let ind = container.length - 1
        while(ind){
            let parent = Math.floor((ind - 1) / 2)
            if(container[parent] <= container[ind]){
                return 
            }
            let temp = container[parent]
            container[parent] = container[ind]
            container[ind] = temp
            ind = parent
        }
    }

    this.extract = () => {
        let { container } = this, 
            len = container.length
        let res = container[0], 
            ind = 0,
            child = ind * 2 + 1

        container[0] = container[len - 1]
        container.pop()
        while(child < len){
            let bro = ind * 2 + 2
            if(bro < len && container[child] > container[bro]){
                child = bro
            }
            if(container[child] >= container[ind]){
                break
            }
            let temp = container[child]
            container[child] = container[ind]
            container[ind] = temp
        }

        return res
    }

    this.gettop = () =>{
        let { container } = this
        if(container.length)    return container[0]
        return null
    }
    this.container = []
    arr.forEach(this.insert)
}


let heap = new minHeap([3, 2, 5, 9, 4, 1]);
console.log(heap);
console.log(heap.gettop());
console.log(heap.extract());
console.log(heap);