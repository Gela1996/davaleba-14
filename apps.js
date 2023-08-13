// დავალება 1

// let number = Number(prompt('Enter number'));

// function isPrime(number) {
// if (number === 1 || number === 0) {
//    return false;
// } else {
//   for (let i = 2; i < number; i++) {
 //       if (number % i === 0) {
 //           return false;
  //      }
//  }
// return true;
//}
//}

//alert(isPrime(number));

//function showPrimes(number) {
//   let result = ''
//    for(let i = 2; i < number; i++) {
//        if(isPrime(i)) {
//            result += `${i}`;
//        }
//    }
//    return result;
// }

//alert(showPrimes(number));

// დავალება 2

// let table = document.body.firstElementChild;

// for (let i = 0; i < table.rows.length; i++) {
//  let row = table.rows[i];
// row.cells[i].style.backgroundColor = 'red';
// }


// დავალება 3

// როგორ ვიპოვოთ table id-ით ‘age-table’
let table = document.getElementById('age-table')

// როგორ ვიპოვოთ ყველა label ელემენტი ცხრილში
table.getElementsByTagName('label')

// როგორ ვიპოვოთ პირველი td ამ ცხრილში
table.getElementsByTagName('td')

//როგორ ვიპოვოთ form name ატრიბუტით ‘search’
let form = document.getElementsByName('search')[0]

//როგორ ვიპოვოთ პირველი input ამ ფორმაში
form.querySelector('input')

//როგორ ვიპოვოთ ბოლო ინფუთი ამ ფორმაში 
let inputs = form.querySelectorAll('input')
inputs[inputs.length-1]
