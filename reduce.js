// reduce

// array fn : sum
// 2 arguments: prev number, curr number

// let num = [10, 3, 5, 7, 8]

// let ans = num.reduce(function(p, c){
//     // console.log(p)
//     // console.log(c)
//     return p+c
// }, 0)
// console.log(ans)




let btrans = [
    { "custid": 2, "amt": 5000, "type": "deposit" },
    { "custid": 3, "amt": 2000, "type": "withdrawal" },
    { "custid": 4, "amt": 4500, "type": "deposit" },
    { "custid": 5, "amt": 1200, "type": "withdrawal" },
    { "custid": 6, "amt": 3200, "type": "deposit" }
  ]

  let ans = btrans.reduce(function(p, c){
        // console.log(p)
        // console.log(c)
        return p+c.amt
    }, 0)
    console.log(ans)
    