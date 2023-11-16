var lemonadeChange = function(bills) {
    let store = {5:0, 10:0}

    for(let i = 0; i < bills.length; i++){
        const cur = bills[i]
        if(cur == 5){
            store[5]++;
        }else if(cur == 10){
            if(store[5] < 1){
                return false
            }else{
                store[5]--;
                store[10]++;
            }
        }else{
            if(store[10] > 0){
                if(store[5] < 1){
                    return false
                }
                store[10]--;
                store[5]--;
            }else{
                if(store[5] > 2){
                    store[5] -= 3
                }else{
                    return false
                }
            }
        }
    }
    return true
};