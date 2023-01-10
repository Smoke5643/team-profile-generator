const Intern = require("../lib/Intern");

describe("Intern", () => {
    it ('should have a school', () => {
        const intern =  new Intern ('Guy', 1, 'smoke5643@gmail.com', 'UNCC')
        expect(intern.getSchool()).toEqual('UNCC');
    });
    it('Should have a role of Intern', () => {
        const intern = new Intern ('Guy', 1, 'smoke5643@gmail.com', 'UNCC');
        expect(intern.getRole()).toEqual('Intern');
    });
});
