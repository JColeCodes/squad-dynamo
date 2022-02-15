class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Return employee's name
    getName() {
        return `${this.name}`;
    }

    // Return employee's id
    getId() {
        return this.id;
    }

    // Return employee's email
    getEmail() {
        return `${this.email}`;
    }

    // Return 'Employee'
    getRole() {
        return `Employee`;
    }
}

module.exports = Employee;