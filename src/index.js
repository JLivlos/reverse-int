module.exports = function reverse(n) {
    const arr = n.toString().split('');
    if (n < 0) {
        return +arr.splice(1, arr.length - 1).reverse().join('');
    };
    return +arr.reverse().join('');
}