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
    return employees.find((item) => item.id === id) || null;
}

console.log(findEmployeeById(2)); // { id: 2, name: "Bob", department: { name: "HR", location: "Building 2" } }


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
}

console.log(getEmployeesByDepartment("Engineering"));
// [{ id: 1, name: "Alice", department: { name: "Engineering", location: "Building 1" } }, { id: 3, name: "Charlie", department: { name: "Engineering", location: "Building 1" } }]

/*
Question 3: Sorting by Name
Write a function sortEmployeesByName that sorts the array of employees by their names in alphabetical order.
*/

var employees = [
    { id: 1, name: "Charlie", department: { name: "Engineering", location: "Building 1" } },
    { id: 2, name: "Bob", department: { name: "HR", location: "Building 2" } },
    { id: 3, name: "Alice", department: { name: "Engineering", location: "Building 1" } },
];

function sortEmployeesByName(employees) {
    // Your code here
}

console.log(sortEmployeesByName(employees));
// [{ id: 3, name: "Alice", department: { name: "Engineering", location: "Building 1" } }, { id: 2, name: "Bob", department: { name: "HR", location: "Building 2" } }, { id: 1, name: "Charlie", department: { name: "Engineering", location: "Building 1" } }]




/*
Question 4: Calculating Average Salary
Given an array of employees with their salaries, write a function calculateAverageSalary that returns the average 
salary of all employees.
*/

var employees = [
    { id: 1, name: "Alice", salary: 70000, department: { name: "Engineering", location: "Building 1" } },
    { id: 2, name: "Bob", salary: 50000, department: { name: "HR", location: "Building 2" } },
    { id: 3, name: "Charlie", salary: 80000, department: { name: "Engineering", location: "Building 1" } },
];

function calculateAverageSalary(employees) {
    // Your code here
}

console.log(calculateAverageSalary(employees)); // 66666.67

/*
Question 5: Grouping by Department
Write a function groupByDepartment that groups employees by their department and returns an object where the 
keys are department names and the values are arrays of employees.
*/


var employees = [
    { id: 1, name: "Alice", department: { name: "Engineering", location: "Building 1" } },
    { id: 2, name: "Bob", department: { name: "HR", location: "Building 2" } },
    { id: 3, name: "Charlie", department: { name: "Engineering", location: "Building 1" } },
];

function groupByDepartment(employees) {
    // Your code here
}

console.log(groupByDepartment(employees));
/* {
   Engineering: [{ id: 1, name: "Alice", department: { name: "Engineering", location: "Building 1" } }, { id: 3, name: "Charlie", department: { name: "Engineering", location: "Building 1" } }],
   HR: [{ id: 2, name: "Bob", department: { name: "HR", location: "Building 2" } }] } */

/*



Question 6: Updating Employee Salary
Write a function updateSalary that takes an employee id and a new salary, and updates the salary of the 
employee with that id.
*/

var employees = [
    { id: 1, name: "Alice", salary: 70000, department: { name: "Engineering", location: "Building 1" } },
    { id: 2, name: "Bob", salary: 50000, department: { name: "HR", location: "Building 2" } },
    { id: 3, name: "Charlie", salary: 80000, department: { name: "Engineering", location: "Building 1" } },
];

function updateSalary(id, newSalary) {
    // Your code here
}

updateSalary(2, 55000);
console.log(employees);
// [{ id: 1, name: "Alice", salary: 70000, department: { name: "Engineering", location: "Building 1" } }, { id: 2, name: "Bob", salary: 55000, department: { name: "HR", location: "Building 2" } }, { id: 3, name: "Charlie", salary: 80000, department: { name: "Engineering", location: "Building 1" } }]




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
}

console.log(findEmployeesInBuilding("Building 1"));
// [{ id: 1, name: "Alice", department: { name: "Engineering", location: "Building 1" } }, { id: 3, name: "Charlie", department: { name: "Engineering", location: "Building 1" } }]


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
}

removeEmployeeById(2);
console.log(employees);
// [{ id: 1, name: "Alice", department: { name: "Engineering", location: "Building 1" } }, { id: 3, name: "Charlie", department: { name: "Engineering", location: "Building 1" } }]


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
}

console.log(findEmployeesByName("Al"));
// [{ id: 1, name: "Alice", department: { name: "Engineering", location: "Building 1" } }, { id: 4, name: "Albert", department: { name: "Engineering", location: "Building 1" } }]



/*
Question 10: Counting Employees per Department
Write a function countEmployeesPerDepartment that returns an object with the count of employees in each department.
*/


var employees = [
    { id: 1, name: "Alice", department: { name: "Engineering", location: "Building 1" } },
    { id: 2, name: "Bob", department: { name: "HR", location: "Building 2" } },
    { id: 3, name: "Charlie", department: { name: "Engineering", location: "Building 1" } },
    { id: 4, name: "David", department: { name: "HR", location: "Building 2" } },
    { id: 5, name: "Eve", department: { name: "Finance", location: "Building 3" } }
];

function countEmployeesPerDepartment(employees) {
    // Your code here
}

console.log(countEmployeesPerDepartment(employees));
// { Engineering: 2, HR: 2, Finance: 1 }




