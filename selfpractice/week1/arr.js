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