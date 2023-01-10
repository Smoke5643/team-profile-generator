const inquirer = require('inquirer');
const fs = require('fs');
const pageTemplate = require('./src/page-template')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const prompt = inquirer.createPromptModule();
const teamMembers = [];


const managerQuestions = [
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
]
const engineerQuestions = [
    {
        message: 'What is the engineer\'s name?',
        name: 'name',
    },
    {
        message: 'What is the engineer\'s id?',
        name: 'id',
    },
    {
        message: 'What is the engineer\'s email?',
        name: 'email',
    },
    {
        message: 'What is the engineer\'s GitHub?',
        name: 'officeNumber',
    },
]
const internQuestions = [
    {
        message: 'What is the intern\'s name?',
        name: 'name',
    },
    {
        message: 'What is the intern\'s id?',
        name: 'id',
    },
    {
        message: 'What is the intern\'s email?',
        name: 'email',
    },
    {
        message: 'What is the intern\'s school?',
        name: 'officeNumber',
    },
]

const chooseEmployeeType = () => {
    return prompt({
        type: 'rawlist',
        message: 'Which kind of employee are you adding?',
        choices: [
            'Engineer',
            'Intern',
            'Manager',
        ],
        name: 'type',
    })
};


const selectEmployeeType = async ({ type }) => {
    switch(type) {
        case 'Engineer': {
            const response = await prompt(engineerQuestions);
            const {name, id, email, gitHub} = response;
            const engineer = new Engineer(name, id, email, gitHub);
            teamMembers.push(engineer);
            break;
        }
        case 'Intern': {
            const response = await prompt(internQuestions);
            const {name, id, email, school} = response;
            const intern = new Intern(name, id, email, school);
            teamMembers.push(intern);
            break;
        }
        case 'Manager': {
            const response = await prompt(managerQuestions);
            const {name, id, email, officeNumber} = response;
            const manager = new Manager(name, id, email, officeNumber);
            teamMembers.push(manager);
            break;
        }
    }
}

const confirmMoreEmployees = ({ addEmployee }) => {
    if (addEmployee) {
        console.log('PROCEED')
        chooseEmployeeType()
        .then(selectEmployeeType)
        .then(addMoreEmployees)
        .then(confirmMoreEmployees);
    } else {
        const template = pageTemplate(teamMembers);
        fs.writeFileSync('./dist/team.html', template)
        console.log('Successfully written to .dist/team.html')
    };
}

const addMoreEmployees = () => {
    return prompt({
        message: 'Would you like to add more employees?',
        type: 'confirm',
        name: 'addEmployee',
    })
}


prompt(managerQuestions)
    .then(({ name, id, email, officeNumber }) => {
        const manager = new Manager(name, id, email, officeNumber);
        teamMembers.push(manager);
    })
    .then(addMoreEmployees)
    .then(confirmMoreEmployees)
   
        
