/* 
Question 2: Filtering by Department
Write a function getEmployeesByDepartment that takes a department name and returns an array of employees 
working in that department.
*/

var employees = [
    { id: 1, name: "Alice", department: { name: "Engineering", location: "Building 1" } },
    { id: 2, name: "Bob", department: { name: "HR", location: "Building 2" } },
    { id: 3, name: "Charlie", department: { name: "Engineering", location: "Building 1" } },
];

function getEmployeesByDepartment(departmentName) {
    // Your code here
    let res = employees.filter((item)=>item.department.name===departmentName)
    return res
}

console.log(getEmployeesByDepartment("Engineering"));
// [{ id: 1, name: "Alice", department: { name: "Engineering", location: "Building 1" } }, { id: 3, name: "Charlie", department: { name: "Engineering", location: "Building 1" } }]
