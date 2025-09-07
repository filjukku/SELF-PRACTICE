// 1. addProperty
// เขียนฟังก์ชัน addProperty(obj, key, value) ที่ทำการเพิ่ม property ใหม่เข้าไปใน object และคืนค่า object ที่ถูกอัปเดต
 
function addProperty(obj,key,value){
    obj[key] = value
}

 
// --------------------------------------------------
// 2. mergeObject
// เขียนฟังก์ชัน mergeObject(obj1, obj2) ที่รวมสอง object เข้าด้วยกันและคืนค่า object ที่รวมแล้ว
 
function mergeObject(obj1,obj2){
    return [...obj1,...obj2]
}
 

 
// --------------------------------------------------
// 3. getFreqOfWords
// เขียนฟังก์ชัน getFreqOfWords(sentence) ที่คืนค่าเป็น object โดย key คือคำที่ไม่ซ้ำกัน (เปลี่ยนเป็น lowercase ทั้งหมด) และ value คือจำนวนครั้งที่คำนั้นปรากฏ โดยไม่สนตัวพิมพ์เล็ก/ใหญ่ หาก input เป็น null หรือ undefined ให้คืนค่า undefined
 
function getFreqOfWords(sentence){
    if(!sentence){return undefined}
    Arr = (sentence.split(" ")).map((x)=>x.toLowerCase)
    obj = {}
    for(i of Arr){
        if(!Object.keys(obj).includes(i)){
            obj[i] = 1
        }else{
            obj[i] += 1
        }
    }return obj
    }