const colors=[{id:1, name:'red', tone:'hot'},{id:2, name:'purple', tone:'cool'},{id:3, name:'white', tone:'neutral'}]
console.log(colors[1])
 
const contacts=[{email:['abc@gmail.com','foo@kmutt.ac.th']},
{address:['Bangkok', 'Puket']}]
console.log(contacts[0].email[1])
 
//array contains many arrays

const groups=[['Malee', 'Jane'], ['John', 'Jay', 'Pete']]
for (let i in groups) {
  console.log(`${groups[i][groups[i].length-1]}`);
}

function longestWord(sentence) {
  let word = ''
  if(typeof(sentence) != "string" || sentence === ""){
    return word
  }
  let arr = sentence.split(" ");
  arr.forEach((i)=> (i.length > word.length || word === '') ? word = i: word = word)
  return word
}
module.exports = longestWord

///////////////

// เขียนฟังก์ชัน factorial(n) ที่คืนค่า n!
function factorial(n){
    let result = 1;
    for(let i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}

console.log(factorial(5));

// เขียนฟังก์ชัน isPrime(num) เช็คว่าเป็นจำนวนเฉพาะหรือไม่
function isPrime(num){
    if(num < 2) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7)); 
console.log(isPrime(10)); 

// ขียนฟังก์ชัน fibonacci(n) ที่คืนค่าเลข Fibonacci ลำดับที่ n
function fibonacci(n){
    if(n <= 1) return n;
    let a = 0, b = 1, temp;
    for(let i = 2; i <= n; i++){
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

console.log(fibonacci(6)); 


