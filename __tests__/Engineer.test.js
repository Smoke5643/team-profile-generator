const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it ('should have a gitHub', () => {
        const engineer =  new Engineer ('Guy', 1, 'smoke5643@gmail.com', 'smoke5643')
        expect(engineer.getGithub()).toEqual('Smoke5643');
    });
    it('SHould have a role of Engineer', () => {
        const engineer = new Engineer ('Guy', 1, 'smoke5643@gmail.com', 'Smoke5643')
    });
});
