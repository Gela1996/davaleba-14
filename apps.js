// დავალება 1

let number = Number(prompt('Enter number'));

function isPrime(number) {
if (number === 1 || number === 0) {
   return false;
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
}

alert(isPrime(number));

function showPrimes(number) {
    let result = ''
    for(let i = 2; i < number; i++) {
        if(isPrime(i)) {
            result += `${i}`;
        }
    }
    return result;
}

alert(showPrimes(number));