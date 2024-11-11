/*
Question 1: Finding a Specific Object
Given the following array of nested objects, write a function findEmployeeById that takes an id and returns 
the employee object with that id.
*/

var employees = [
    { id: 1, name: "Alice", department: { name: "Engineering", location: "Building 1" } },
    { id: 2, name: "Bob", department: { name: "HR", location: "Building 2" } },
    { id: 3, name: "Charlie", department: { name: "Engineering", location: "Building 1" } },
];

function findEmployeeById(id) {
    let res = employees.filter((item)=>item.id===id) 
    return res
    // return employees.find((item) => item.id === id) || null;
}

console.log(findEmployeeById(2)); // { id: 2, name: "Bob", department: { name: "HR", location: "Building 2" } }

