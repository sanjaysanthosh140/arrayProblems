// const arr1 = [2, 4, 6, 8,10];
// const arr2 = [1, 3, 5, 7, 9,9];

// let t1 = 0
// let t2 = 0
// let res = []

// while(t1 < arr1.length && t2 < arr2.length ){
//   let  first = arr1[t1]
//   let sec = arr2[t2]
//   if(first<= sec){
//     if (!res.includes(first)) {
//       res.push(first)
//     }
//        t1 ++
//   }else{
//     if (!res.includes(sec)) {
//       res.push(sec)
//     }
//        t2 ++
//   }
// }
// while(t1 < arr1.length){
//         res.push(arr1[t1])
//        t1 ++
// }

// while(t2 < arr2.length){
//         res.push(arr2[t2])
//        t2 ++
// }
// console.log(res)



const arr1 = [2, 4, 6, 8, 10];
const arr2 = [1, 3, 5, 7, 9, 9];            // res[1,2,3,4,5,6,7,8,10]

let t1 = 0;
let t2 = 0;
let res = [];

while (t1 < arr1.length && t2 < arr2.length) {
  let first = arr1[t1]
  let sec = arr2[t2]

  if (first <= sec) {
    if (!res.includes(first)) {
      res.push(first)
    }
    t1++

  } else {
    if (!res.includes(sec)) {
      res.push(sec)
    }
    t2++
  }


}
while (t1 < arr1.length) {
  res.push(arr1[t1])
  t1++
}

while (t2 < arr2.length) {
  res.push(arr2[t2])
  t2++
}


console.log(res)

