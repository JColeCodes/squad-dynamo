const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    // Return engineer's github
    getGithub() {
        return `${this.github}`;
    }
    
    // Return 'Engineer'
    getRole() {
        return `Engineer`;
    }
}

module.exports = Engineer;