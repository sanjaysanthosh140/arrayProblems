let errorString = "is2 book3 this1";

const order = (string) =>{
    let position = {}
  let words = string.split(" ");
  words.forEach((word)=>{
    let letter = word.split("")
    console.log(letter)
    letter.forEach((letter)=>{
        if(Number(letter)){
            position[letter] = word
        }
    })
    
    let oreder = Object.entries(position).sort((a,b)=>
     a[1] - b[1]
    ).map((a,b)=>a[1]).join("")
    console.log(oreder)
})
}


order(errorString)



