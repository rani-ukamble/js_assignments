// Question 6: Updating Employee Salary
// Write a function updateSalary that takes an employee id and a new salary, and updates the salary of the 
// employee with that id.
// */

var employees = [
    { id: 1, name: "Alice", salary: 70000, department: { name: "Engineering", location: "Building 1" } },
    { id: 2, name: "Bob", salary: 50000, department: { name: "HR", location: "Building 2" } },
    { id: 3, name: "Charlie", salary: 80000, department: { name: "Engineering", location: "Building 1" } },
];

function updateSalary(id, newSalary) {
    let ans = employees.filter((item)=>{
        if(item.id==id){item.salary=newSalary}
    })

}

updateSalary(2, 95000);
console.log(employees);

// [{ id: 1, name: "Alice", salary: 70000, department: { name: "Engineering", location: "Building 1" } }, { id: 2, name: "Bob", salary: 55000, department: { name: "HR", location: "Building 2" } }, { id: 3, name: "Charlie", salary: 80000, department: { name: "Engineering", location: "Building 1" } }]


