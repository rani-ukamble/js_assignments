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
    let groups = {};

    employees.forEach(element => {
        const dept = element.department.name;

        // If the department doesn't exist in the groups object, create it with an empty array
        if (!groups[dept]) {
            groups[dept] = [];
        }

        // Push the employee to the corresponding department's array
        groups[dept].push(element);
    });

    return groups;
}

// console.log(groupByDepartment(employees));
console.log(JSON.stringify(groupByDepartment(employees), null, 2));

/* {
   Engineering: [{ id: 1, name: "Alice", department: { name: "Engineering", location: "Building 1" } }, { id: 3, name: "Charlie", department: { name: "Engineering", location: "Building 1" } }],
   HR: [{ id: 2, name: "Bob", department: { name: "HR", location: "Building 2" } }] } */

