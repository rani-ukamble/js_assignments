// map

// array fn : v6
// used to modify and transform linear array
// default return value is undefined
// it is callback function -> takes 2 arguments (item, index)

// let l = [1, 2, 3, 4, 5, 6];
// l.map(function(item, index) {
//     console.log(item + " " + index);
// });



let l = [1, 2, 3, 4, 5, 6];
// let op = l.map(function(item, index){
//     return item+10
// })
// console.log(op)


// increment only even

// let op = l.map(function(item, index){
//     if(item%2==0)
//         return item
//     })
//     console.log(op)



// transfor,m array



var ans = l.map((item, index)=>item+10)
console.log(ans)


