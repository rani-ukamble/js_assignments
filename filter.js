// filters

// 1. used in array where conditions are used 
// 2. never modify array values
// 3. default return value is []
// 4. always return copy of updated array , no affect on original data
// true / false form check
// filter creates a new array with elements that satisfy the condition


let l = [1, 2, 3, 4, 5]

// Q1. inc each value by 10 ==> filter not increment numbers
// var ans = l.filter()

// var ans1 = l.filter(function(item, index){
//     return "hello"
//     // return 0    /* [] */
// })
// console.log(ans1) 
// // op will be return [1, 2, 3, 4 ,5]


// Q2. increase only even numbers
// var ans1 = l.filter(function (item, index) {
//     if (item % 2 == 0)
//         return item
// }).map(function(item, index){
//     return item+1;
// })

// console.log(ans1) /*[ 3, 5 ] */



let data = 
[
    {
        "name": "Alice Johnson",
        "age": 30,
        "address": {
            "street": "123 Maple St",
            "city": "Springfield",
            "state": "IL",
            "zip": "62704"
        }
    },
    {
        "name": "Bob Smith",
        "age": 25,
        "address": {
            "street": "456 Oak Ave",
            "city": "Riverdale",
            "state": "NY",
            "zip": "10463"
        }
    },
    {
        "name": "Charlie Davis",
        "age": 40,
        "address": {
            "street": "789 Pine Rd",
            "city": "Metropolis",
            "state": "CA",
            "zip": "90210"
        }
    }
]


// let ans = data.filter((item)=>{
//     if(item.name[0]=='C'){
//         return item
//     }
// })
// console.log(ans) 



let ans = data.filter((item)=>{
    if(item.name[0]=='C'){
        return item
    }
}).map((item)=>item.name)
console.log(ans)