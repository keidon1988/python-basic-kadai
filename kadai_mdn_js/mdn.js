const today = new Date();

const year = today.getFullYear();   // 西暦（例：2024）
const month = today.getMonth() + 1; // 月（0から始まるので+1が必要）
const day = today.getDate();        // 日（1～31）

console.log(year + '年' + month + '月' + day + '日');
