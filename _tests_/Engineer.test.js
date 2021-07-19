const { expect } = require('@jest/globals');
const { ecNormalize } = require("sshpk");
const Engineer = require('../lib/Engineer');

// TextDecoderStream('Updated role with Engineer.', () => {
test("Create engineer", () => {
    const engineer = new Engineer('name', 'id', 'email', 'github')
    expect(engineer.getRole()).toBe('Engineer');
});

test("Github username", () => {
    const github = "killjoyangel2";
    const engineer = new Engineer("name", "id", "email", github);
    expect(engineer.getGithub()).toBe(github);
});

test('engineer name', () => {
    const name = 'John';
    const engineer = new Engineer(name, 'id', 'email', 'gitHubName');
    expect(engineer.getName()).toBe(name);
});

test('GitHub id', () => {
    const id = 1
    const engineer = new Engineer('name', id, 'email', 'gitHubName');
    expect(engineer.getId()).toBe(id);
});

test('GitHub email', () => {
    const email = 'JDavid337@';
    const engineer = new Engineer('name', 'id', email, 'gitHubName');
    expect(engineer.getEmail()).toBe(email);
});

test('GitHub roll', () => {
    const engineer = new Engineer('name', 'id', 'email', 'gitHubName');
    expect(engineer.getRole()).toBe('Engineer');
});