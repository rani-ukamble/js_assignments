/*
Question 8: Removing an Employee
Write a function removeEmployeeById that takes an id and removes the employee with that id from the array.
*/

var employees = [
    { id: 1, name: "Alice", department: { name: "Engineering", location: "Building 1" } },
    { id: 2, name: "Bob", department: { name: "HR", location: "Building 2" } },
    { id: 3, name: "Charlie", department: { name: "Engineering", location: "Building 1" } },
];

function removeEmployeeById(id) {
    // Your code here
    let res = employees.filter((item)=>item.id!==id) 
    return res}

console.log(removeEmployeeById(2));
// [{ id: 1, name: "Alice", department: { name: "Engineering", location: "Building 1" } }, { id: 3, name: "Charlie", department: { name: "Engineering", location: "Building 1" } }]
