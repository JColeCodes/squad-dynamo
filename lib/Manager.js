const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    // Return manager's office number
    getOfficeNumber() {
        return `${this.officeNumber}`;
    }
    
    // Return 'Manager'
    getRole() {
        return `Manager`;
    }
}

module.exports = Manager;