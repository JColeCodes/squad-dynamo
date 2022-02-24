const inquirer = require('inquirer');

// Require classes
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

// Profiles stores data
function Profiles() {
    this.manager = [];
    this.engineers = [];
    this.interns = [];
}

const profiles = new Profiles;
const employeeIds = []; // Array of input ids so each employee has a unique id

// Prompt for manager
const promptManager = () => {
    console.log('Welcome to the Team Profile Generator!');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Input the Manager\'s name:',
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log('\nPlease input the Manager\'s name:');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Input the Manager\'s employee id:',
            validate: managerIdInput => {
                if (!isNaN(managerIdInput) && !employeeIds.includes(managerIdInput)) {
                    employeeIds.push(managerIdInput);
                    return true;
                } else {
                    console.log('\nPlease input a unique numerical id:');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Input the Manager\'s email:',
            validate: managerEmailInput => {
                if (managerEmailInput.includes("@") && managerEmailInput.includes(".")) {
                    return true; // Makes sure email includes @ and .
                } else {
                    console.log('\nPlease input a valid email:');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'Input the Manager\'s office number:',
            validate: managerOfficeNumberInput => {
                if (/\d/.test(managerOfficeNumberInput)) {
                    return true; // Makes sure office number contains at least one number
                } else {
                    console.log('\nPlease input an office number that contains at least one number:');
                    return false;
                }
            }
        }
    ])
    .then(managerData => {
        // Creates a new Manager
        Profiles.prototype.newManager = function() {
            const manager = new Manager(
                managerData.managerName, 
                managerData.managerId, 
                managerData.managerEmail, 
                managerData.managerOfficeNumber
            );
            this.manager.push(manager);
        };
        profiles.newManager();
    });
}

// Prompt for the other profiles - Engineer and Intern
const promptProfiles = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'continueChoice',
            message: 'What would you like to do next?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish Building (Generate Page)']
        },
    ])
    .then(choice => {
        // If adding Engineer
        if (choice.continueChoice === 'Add an Engineer') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'engineerName',
                    message: 'Input the Engineer\'s name:',
                    validate: engineerNameInput => {
                        if (engineerNameInput) {
                            return true;
                        } else {
                            console.log('\nPlease input the Engineer\'s name:');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'engineerId',
                    message: 'Input the Engineer\'s employee id:',
                    validate: engineerIdInput => {
                        if (!isNaN(engineerIdInput) && !employeeIds.includes(engineerIdInput)) {
                            employeeIds.push(engineerIdInput);
                            return true;
                        } else {
                            console.log('\nPlease input a unique numerical id:');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: 'Input the Engineer\'s email:',
                    validate: engineerEmailInput => {
                        if (engineerEmailInput.includes("@") && engineerEmailInput.includes(".")) {
                            return true; // Makes sure email includes @ and .
                        } else {
                            console.log('\nPlease input a valid email:');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'engineerGitHub',
                    message: 'Input the Engineers\'s GitHub username:',
                    validate: engineerGitHubInput => {
                        if (engineerGitHubInput) {
                            return true;
                        } else {
                            console.log('\nPlease input a GitHub username:');
                            return false;
                        }
                    }
                }
            ])
        }
        // If adding an intern
        else if (choice.continueChoice === 'Add an Intern') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'internName',
                    message: 'Input the Intern\'s name:',
                    validate: internNameInput => {
                        if (internNameInput) {
                            return true;
                        } else {
                            console.log('\nPlease input the Intern\'s name:');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'internId',
                    message: 'Input the Intern\'s employee id:',
                    validate: internIdInput => {
                        if (!isNaN(internIdInput) && !employeeIds.includes(internIdInput)) {
                            employeeIds.push(internIdInput);
                            return true;
                        } else {
                            console.log('\nPlease input a unique numerical id:');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: 'Input the Intern\'s email:',
                    validate: internEmailInput => {
                        if (internEmailInput.includes("@") && internEmailInput.includes(".")) {
                            return true; // Makes sure email includes @ and .
                        } else {
                            console.log('\nPlease input a valid email:');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'internSchool',
                    message: 'Input the Intern\'s school:',
                    validate: internSchoolInput => {
                        if (internSchoolInput) {
                            return true;
                        } else {
                            console.log('\nPlease input the name of a school:');
                            return false;
                        }
                    }
                }
            ])
        }
        // Else (Exit)
        else {
            return { exit: true };
        }
    })
    .then(profileData => {
        // Create new Engineer
        if (profileData.engineerName) {
            Profiles.prototype.newEngineer = function() {
                const engineer = new Engineer(
                    profileData.engineerName, 
                    profileData.engineerId, 
                    profileData.engineerEmail, 
                    profileData.engineerGitHub
                );
                this.engineers.push(engineer);
            };
            profiles.newEngineer();
            return promptProfiles(); // Call function again
        }
        // Create new Intern
        else if (profileData.internName) {
            Profiles.prototype.newIntern = function() {
                const intern = new Intern(
                    profileData.internName, 
                    profileData.internId, 
                    profileData.internEmail, 
                    profileData.internSchool
                );
                this.interns.push(intern);
            };
            profiles.newIntern();
            return promptProfiles(); // Call function again
        }
        // Else (Exit)
        else {
            console.log('Thank you. Your webpage is being generated.');
            return profiles;
        }
    });
}

module.exports = { promptManager, promptProfiles };