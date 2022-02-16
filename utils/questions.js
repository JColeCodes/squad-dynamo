const inquirer = require('inquirer');

const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

function Profiles() {
    this.manager = [];
    this.engineers = [];
    this.interns = [];
}

const profiles = new Profiles;
const employeeIds = [];

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
            type: 'number',
            name: 'managerId',
            message: 'Input the Manager\'s employee id:',
            validate: managerIdInput => {
                if (!employeeIds.includes(managerIdInput)) {
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
        //console.log(profiles);
        //console.log(profiles.manager[0].getRole());
    });
}

module.exports = { profiles, promptManager, promptProfiles };