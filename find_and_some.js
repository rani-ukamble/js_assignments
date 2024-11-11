// find and some function

// both are array function
// default return value for find() is undefined, for some() is false
// has callback funct same as map with 2 arguments item and index

let btrans = [
    { "custid": 2, "amt": 5000, "type": "deposit" },
    { "custid": 3, "amt": 2000, "type": "withdrawal" },
    { "custid": 4, "amt": 4500, "type": "deposit" },
    { "custid": 5, "amt": 1200, "type": "withdrawal" },
    { "custid": 6, "amt": 3200, "type": "deposit" }
  ]

  
//   var ans = btrans.find(item=>item.custid==2)
//   console.log(ans)
  

var ans = btrans.some(item=>item.custid==2)
console.log(ans)