/////////////////////////////////////////////////////////////////////////////(3.1)

// function reverse() {
//     let num= [5, 3, 2, 4, 4, 3];
// return console.log(num.reverse().toString());
// }
// reverse();


/////////////////////////////////////////////////////////////////////////////(3.2)


// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even.");
//     } else {
//         console.log(i + " is odd.");
//     }
// }


/////////////////////////////////////////////////////////////////////////////(3.3)


// function returns(str)
// {
// return str.split('').sort().join('');     //تحويل string الى arr   // sort ترتيب    // join تحويل اررري الى سترينغ 
// }
// console.log(returns("orange"));



/////////////////////////////////////////////////////////////////////////////(3.4)
let l = 13574291247786;
let numdash = l.toString();
let result = "";
let k = 0;
function eveen() {
  for (let i = 0; i < numdash.length; i++) {
    if (
      i < numdash.length - 1 &&
      parseInt(numdash[i]) % 2 === 0 &&
      parseInt(numdash[i + 1]) % 2 === 0
    ) {
      k = "-";
    } else {
      k = "";
    }
    result += numdash[i] + k;
  }
  return console.log(result);
}

eveen();







/////////////////////////////////////////////////////////////////////////////(3.5)

function age(age) {
    return age >= 18 ? "The user is Adult" : "The user is Minor";
}

  alert(age(prompt("Enter your age ")));

