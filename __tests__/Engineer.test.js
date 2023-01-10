const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it ('should have a Github', () => {
        const engineer =  new Engineer ('Guy', 1, 'smoke5643@gmail.com', 'Smoke5643');
        expect(engineer.getGithub()).toEqual('Smoke5643');
    });
    it('Should have a role of Engineer', () => {
        const engineer = new Engineer ('Guy', 1, 'smoke5643@gmail.com', 'Smoke5643');
        expect(engineer.getRole()).toEqual('Engineer');
    });
});
