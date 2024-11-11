let arr = [2, 3, 4 ,5, -6, -8]

// console.log(arr.filter(num=>num%2===0))

// let a = 0

// let res = ""
// if(a<0) res = "neg"
// else if(a>0) res = "pos"
// else res = "zero"

// console.log(res)

// let str = "jhk"
// console.log(str.toLocaleUpperCase())

// for(let i=1;i<=6;i++){
//     console.log(i)
// }


let str = "abab"
let f =true
let l=0
let r=str.length-1
while(l<r){
    if(str[l]!=str[r])
        f=false
    r--;
    l++;
}
if(f) console.log("y")
else console.log("n")