const { expect } = require("@jest/globals");
const { ecNormalize } = require("sshpk");
const Intern = require("../lib/Intern");

test("Create Intern", () => {
    const inte = new Intern('name', 'role', 'id', 'email', 'school');
    expect(inte.getRole()).toBe('Intern');
});

test("Intern's school", () => {
    const School = "boot camp academy"
    const inte = new Intern('name', 'role', 'id', 'email', School);
    expect(inte.getSchool()).toBe('School');
});

test("Intern's name", () => {
    const Name = "Michael"
    const inte = new Intern(Name, 'role', 'id', 'email', 'school');
    expect(inte.getName()).toBe('Name');
});

test("Intern's role", () => {
    const School = "listen and take notes"
    const inte = new Intern('name', Role, 'id', 'email', 'school');
    expect(inte.getRole()).toBe('Intern');
});

test("Intern's id", () => {
    const ID = "3"
    const inte = new Intern('name', 'role', ID, 'email', 'school');
    expect(inte.getID()).toBe('ID');
});

test("Intern's email", () => {
    const email = "Douglas@DU.edu"
    const inte = new Intern('name', 'role', 'id', Email, 'school');
    expect(inte.getEmail()).toBe('Email');
});