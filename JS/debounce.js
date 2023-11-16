function debonce(fn, delay){
    var timeout = null;
    return function(){
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay)
    }
}

function debounce(fn, delay) {
    var timeout = null;
    return function() {
        if(timeout) clearTimeout(timeout)

        const run = (timeout == null)
        timeout = setTimeout(() => {
            timeout = null
        }, delay)
        if(run) fn()
    }
}


function throttle(fn, delay){
    let canRun = true;
    
    return function(){
        if(!canRun) return;

        fn.apply(this, arguments)
        canRun = false
        setTimeout(() => {
            canRun = true
        }, delay)
    }
}

function throttle(fn, delay) {
    let canRun = true;

    return function() {
        if(!canRun) return

        fn(this, arguments)
        canRun = false
        setTimeout(() => {
            canRun = false
        }, delay) 
    }
}