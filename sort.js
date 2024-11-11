// sort: 

// array fn - natural orders

let btrans = [
    { "custid": 2, "amt": 5000, "type": "deposit" },
    { "custid": 3, "amt": 2000, "type": "withdrawal" },
    { "custid": 4, "amt": 4500, "type": "deposit" },
    { "custid": 5, "amt": 1200, "type": "withdrawal" },
    { "custid": 6, "amt": 3200, "type": "deposit" }
  ]

//   quick sort
// var ans = btrans.sort()
// console.log(ans)


var ans = btrans.sort(function(a, b){return a.amt-b.amt})
console.log(ans)