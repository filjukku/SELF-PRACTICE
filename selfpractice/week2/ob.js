// เขียนฟังก์ชัน sumArray(arr) ที่คืนค่าผลรวมของตัวเลขทั้งหมด
function sumArray(arr){
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1,2,3,4,5])); 


// เขียนฟังก์ชัน uniqueArray(arr) ที่คืนค่า Array ที่ไม่ซ้ำกัน
function uniqueArray(arr){
    return [...new Set(arr)];
}

console.log(uniqueArray([1,2,2,3,4,4,5])); 

// มีข้อมูลคนในรูปแบบ Object ให้หาค่าเฉลี่ยอายุ

const people = [
    { name: "A", age: 20 },
    { name: "B", age: 25 },
    { name: "C", age: 30 }
];

function averageAge(arr){
    let total = arr.reduce((sum, person) => sum + person.age, 0);
    return total / arr.length;
}

console.log(averageAge(people));

// เขียนฟังก์ชัน countWords(arr) ที่รับ Array ของคำ และคืน Object ที่เก็บจำนวนแต่ละคำ

function countWords(arr){
    let result = {};
    for(let word of arr){
        result[word] = (result[word] || 0) + 1;
    }
    return result;
}

console.log(countWords(["apple","banana","apple","orange","banana","apple"]));

