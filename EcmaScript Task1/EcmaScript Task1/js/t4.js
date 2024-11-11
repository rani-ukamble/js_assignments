/*
Question 4: Calculating Average Salary
Given an array of employees with their salaries, write a function calculateAverageSalary that returns the average 
salary of all employees.
*/

// Key : use reduce function to calculate sum

var employees = [
    { id: 1, name: "Alice", salary: 70000, department: { name: "Engineering", location: "Building 1" } },
    { id: 2, name: "Bob", salary: 50000, department: { name: "HR", location: "Building 2" } },
    { id: 3, name: "Charlie", salary: 80000, department: { name: "Engineering", location: "Building 1" } },
];

function calculateAverageSalary(employees) {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0)
    return total/employees.length
}

console.log(calculateAverageSalary(employees)); // 66666.67
