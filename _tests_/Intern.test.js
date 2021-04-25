const { expect } = require("@jest/globals");
const { ecNormalize } = require("sshpk");
const Intern = require("../lib/Intern");

test("Create Intern", () => {
    const intern = new Intern('name', 'role', 'id', 'email', 'school');
    expect(intern.getRole()).toBe('Intern');
});

test("Intern's school", () => {
    const School = "School"
    const intern = new Intern('name', 'role', 'id', 'email', School);
    expect(intern.getSchool()).toBe('School');
});
/*
test("Intern's name", () => {
    const Name = "Name"
    const Intern = new Intern('role', Name, 'id', 'email', 'school');
    expect(intern.getName()).toBe('Name');
});

test("Intern's role", () => {
    const role = "what you do as an intern."
    const intern = new Intern('name', role, 'id', 'email', 'school');
    expect(intern.getrole()).toBe('Intern');
});

test("Intern's ID", () => {
    const ID = "3"
    const intern = new Intern('name', 'role', ID, 'email', 'school');
    expect(intern.getID()).toBe('ID');
});

test("Intern's email", () => {
    const email = "Douglas@DU.edu"
    const intern = new Intern('name', 'role', 'id', email, 'school');
    expect(intern.getemail()).toBe('email');
});*/