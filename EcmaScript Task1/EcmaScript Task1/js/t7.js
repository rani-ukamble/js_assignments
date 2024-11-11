/*
Question 7: Finding Employees in a Building
Write a function findEmployeesInBuilding that takes a building name and returns an array of employees 
working in that building.
*/

var employees = [
    { id: 1, name: "Alice", department: { name: "Engineering", location: "Building 1" } },
    { id: 2, name: "Bob", department: { name: "HR", location: "Building 2" } },
    { id: 3, name: "Charlie", department: { name: "Engineering", location: "Building 1" } },
];

function findEmployeesInBuilding(buildingName) {
    // Your code here
let a1 = []
    let ans = employees.filter((item)=>{
        if(item.department.location===buildingName){
            return item
        }
    }).map((item)=>a1.push(item))
    return a1
}

console.log(findEmployeesInBuilding("Building 1"));

// [{ id: 1, name: "Alice", department: { name: "Engineering", location: "Building 1" } }, { id: 3, name: "Charlie", department: { name: "Engineering", location: "Building 1" } }]
