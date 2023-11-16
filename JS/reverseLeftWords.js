var reverseLeftWords = function(s, n) {
    return  s.slice(n, s.length) + s.slice(0, n)
};