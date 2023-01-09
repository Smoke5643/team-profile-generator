const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const prompt = inquirer.createPromptModule();
const teamMembers= [];

prompt([
    {
        message: 'What is the manager\'s name?',
        name: 'name',
    },
    {
        message: 'What is the manager\'s id?',
        name: 'id',
    },
    {
        message: 'What is the manager\'s email?',
        name: 'email',
    },
    {
        message: 'What is the manager\'s office number?',
        name: 'officeNumber',
    },
]).then(({ name, id , email, officeNumber}) => {
    const manager = new Manager (name, id, email, officeNumber);
    teamMembers.push(manager);
})


