const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, role, school){
        super(name, id, email);

        if (role == '') {
            this.role = 'Intern';
        } else {
            this.role = role;
        }

        this.school = school;
    }

    getschool(){
        return this.school;
    }

    getRole(){
        return this.role
    }
}

module.exports = Intern;
