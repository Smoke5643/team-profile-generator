const Manager = require("../lib/Manager");

describe("Manager", () => {
    it ('should have an office number', () => {
        const manager =  new Manager ('Guy', 1, 'smoke5643@gmail.com', '5643')
        expect(manager.getOfficeNumber()).toEqual('5643');
    });
    it('Should have a role of Manager', () => {
        const manager = new Manager ('Guy', 1, 'smoke5643@gmail.com', '5643');
        expect(manager.getRole()).toEqual('Manager');
    });
});

