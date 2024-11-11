// Question 3: Sorting by Name
// Write a function sortEmployeesByName that sorts the array of employees by their names in alphabetical order.
// */

var employees = [
    { id: 1, name: "Charlie", department: { name: "Engineering", location: "Building 1" } },
    { id: 2, name: "Bob", department: { name: "HR", location: "Building 2" } },
    { id: 3, name: "Alice", department: { name: "Engineering", location: "Building 1" } },
];

function sortEmployeesByName(employees) {
    return employees.sort((a,b)=>a.name.localeCompare(b.name));
}

console.log(sortEmployeesByName(employees));
// [{ id: 3, name: "Alice", department: { name: "Engineering", location: "Building 1" } }, { id: 2, name: "Bob", department: { name: "HR", location: "Building 2" } }, { id: 1, name: "Charlie", department: { name: "Engineering", location: "Building 1" } }]
