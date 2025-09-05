// const words = ["mango","apple ","mangosteen","orange"]
// const shortwords = words.filter((words) => words.length <= 6)
// console.log(words)

// console.log(shortwords)

const words = ["mango","apple ","mangosteen","orange"]
const shortwords = words.map((words)=> words.toUpperCase())
console.log(shortwords)

const students = [
  { id: 1, name: "Somchai Jaidee" },
  { id: 2, name: "Suda Deejai" },
  { id: 3, name: "John Smith" },
]

const studentsID = students.map( j=>j.id).filter(i => i%2 == 0)
// console.log(studentsID)

const onlymango = words.map(words => words.toLowerCase()).filter(words => words.includes("mango"))
console.log(onlymango)



const cart = [
  { productId: 1001, price: 500, quantity: 2 },
  { productId: 1002, price: 10, quantity: 3 },
  { productId: 1003, price: 5, quantity: 10 },
];

// คำนวณยอดรวมราคาสินค้าทั้งหมดในตะกร้า
const totalPrice = cart.reduce((accumulator, item) => {
  const itemTotal = item.price * item.quantity; // ราคาของสินค้าชิ้นนี้
  return accumulator + itemTotal;                // รวมกับยอดสะสมก่อนหน้า
}, 0);

// สร้างอ็อบเจ็กต์เก็บยอดรวม
const total = { total: totalPrice };

console.log(total);
