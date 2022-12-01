function isPalindrome(str) {
    let reverseStr ='';
    for (let i =str.length - 1; i>=0; i--)
        reverseStr += str[i];
    return str == reverseStr;
}

// console.log(isPalindrome('스위스'));

let maxPal = 0; maxI = 0; maxK = 0;
for (let i=100; i<=999; i++) {
    for (let k=i; k<=999; k++) {                 //K를 i로 시작하면 대각선만 가능
        let product = i*k;
        if (isPalindrome(String(product))) {
            if (product > maxPal) {
                maxPal = product;
                maxI = i;
                maxK = k;
            }
        }
    }
}
console.log(`${maxI} * ${maxK} = ${maxPal}`);