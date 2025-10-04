class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe() {

        const baseDescription = super.describe();
        return `${baseDescription} As a Manager, they lead a team of ${this.teamSize} people.`;
    }
}

class Company {
    constructor() {

        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
        console.log(`Added: ${employee.name}`);
    }

    listEmployees() {
        console.log('\n--- Company Employee Roster ---');
        if (this.employees.length === 0) {
            console.log('The company has no employees yet.');
            return;
        }

        this.employees.forEach(employee => {
            console.log(employee.describe());
        });
        console.log('-----------------------------\n');
    }
}

const employee1 = new Employee('Alice Johnson', 'Marketing');
const employee2 = new Employee('Bob Smith', 'Sales');
const manager1 = new Manager('Carol Davis', 'Engineering', 8);

const globalTech = new Company();

globalTech.addEmployee(employee1);
globalTech.addEmployee(employee2);
globalTech.addEmployee(manager1);
globalTech.listEmployees();