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
    let groups = {}
    
    employees.forEach(element => {
        let dept = element.department.name

        if(!groups[dept]){
            groups[dept]=1
        }

        else groups[dept] += 1
    });
    return groups
}

console.log(countEmployeesPerDepartment(employees));
// { Engineering: 2, HR: 2, Finance: 1 }




