class Employee {
    constructor(name, id, email, role = 'Employee'){
        this.name = name;
        this.id = id;
        this.email = email;

        if (role == ''){
            this.role = 'Employee';
        }else{
            this.role = role;
        }
    }
}

module.exports = Employee;
