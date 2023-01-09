const Employee = require("../lib/Employee");
const Employee = require("../lib/Employee");

describe("Employee", () => {
    it('should have and id, email, and name', () => {
        const employee = new Employee(1, 'smoke5643@gmail.com','Guy');
        expect(employee.name).toEqual('Guy');
     }
    );

    it ('should have a name', () => {

    });

    it ('should have an id', () => {

    });

    it ('should have an email', () => {

    });

    it ('should have a role', () => {

    });
});
