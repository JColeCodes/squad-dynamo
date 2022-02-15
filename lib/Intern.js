const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    // Return intern's school
    getSchool() {
        return `${this.school}`;
    }
    
    // Return 'Intern'
    getRole() {
        return `Intern`;
    }
}

module.exports = Intern;