const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, role, github){
        super(name, id, email);

        if (role == '') {
            this.role = 'Engineer';
        } else {
            this.role = role;
        }

        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return this.role
    }
}

module.exports = Engineer;
