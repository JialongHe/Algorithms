let fact = (n) => {
    return fact_iter(n, 1)
}

let fact_iter = (n, product) => {
    if(n == 1)
        return product
    return fact_iter(n - 1, n * product)
}
