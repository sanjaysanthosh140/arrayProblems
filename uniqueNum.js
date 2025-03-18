//let numbers = [1, 2, 1, 3, 4, 2, 5, 4];
// 
// const getUniq = (numbers) => {
//   let count = {};
//   let uniqNumbers = [];
// 
//   numbers.forEach((number) => {
// count[number] = (count[number] || 0) + 1;
//   });
//   Object.keys(count).forEach((key) => {
// if (count[key] === 1) {
//   uniqNumbers.push(Number(key));
// }
//   });
// 
//   return uniqNumbers;
// };
// 
// const uq = getUniq(numbers);
// console.log(uq)
// 



const getUnique = (array) => {
let count = {};
array.forEach((num)=>{
    let arr = [num]
    if(count[arr]){
        count[arr] +=1;
    }else{
        count[arr] = 1;
    }
})
console.log(count)
let uniQ = []
Object.keys(count).forEach((keys)=>{
    if(count[keys] === 1){
        uniQ.push(Number(keys))
    }
})
return uniQ;
}

console.log(getUnique([1,2,1,3,4,2,5,4]))