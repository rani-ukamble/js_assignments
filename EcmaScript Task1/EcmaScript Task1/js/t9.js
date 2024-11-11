/*
Question 9: Finding Employees by Name
Write a function findEmployeesByName that takes a name (or part of a name) and returns an array of 
employees whose names contain the given name.
*/

var employees = [
    { id: 1, name: "Alice", department: { name: "Engineering", location: "Building 1" } },
    { id: 2, name: "Bob", department: { name: "HR", location: "Building 2" } },
    { id: 3, name: "Charlie", department: { name: "Engineering", location: "Building 1" } },
    { id: 4, name: "Albert", department: { name: "Engineering", location: "Building 1" } },
];

function findEmployeesByName(name) {
    // Your code here
    return employees.filter((ele)=>ele.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
}

console.log(findEmployeesByName("Al"));
// [{ id: 1, name: "Alice", department: { name: "Engineering", location: "Building 1" } }, { id: 4, name: "Albert", department: { name: "Engineering", location: "Building 1" } }]


