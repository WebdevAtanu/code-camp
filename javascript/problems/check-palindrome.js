var isPalindrome = function (x) {
    let reversed = x.toString().split('').reverse().join('');
    if (reversed === x.toString()) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome(121)); // true