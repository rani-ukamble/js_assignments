// callback


//1. using arrow operator

// let circle = (dim)=>3.14*dim.r*dim.r

// let triangle = (dim)=> 0.5*dim.h*dim.b

// let area = (target, d) => target(d)

// let area_c = area(circle, {r:7})
// let area_t = area(triangle, {h:2, b:4});

// console.log(area_c)
// console.log(area_t)




// method 3
// let area_c = (dim) => 3.14 * dim.r * dim.r;
// let area_t = (dim) => 0.5 * dim.h * dim.b;

// console.log(area_c({r: 7})); // Output: area of the circle
// console.log(area_t({h: 2, b: 4})); // Output: area of the triangle





// 2. method 2 : old method

// function circle (dim){
//     return 3.14*dim.r*dim.r
// }

// function triangle(dim){
//     return 0.5*dim.h*dim.b
// }

// function area(target, d){
//     return target(d)
// }

// let area_c = area(circle, {r:7})
// let area_t = area(triangle, {h:2, b:4});

// console.log(area_c)
// console.log(area_t)



// let l = [1, 2, 3, 4];
// let op = l.filter(element => element % 2 === 0);
// console.log(op);



// Differences : map vs filter
// Method	Purpose	Return Value	Callback Function
// map	=> Transforms each element	New array of same length	Should return transformed element
// filter =>	Filters elements based on condition	New array with selected elements	Should return true or false for each element



let l = [1, 2, 3, 4];
let op = []
l.forEach(element => {
    if(element%2===0) op.push((element))
});
console.log(op)
