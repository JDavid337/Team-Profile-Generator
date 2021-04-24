const { expect } = require('@jest/globals');
const { ecNormalize } = require("sshpk");
const Engineer = require('../lib/Engineer');

// TextDecoderStream('Updated role with Engineer.', () => {
test("Create engineer", () => {
    const engineer = new Engineer('name', 'role', 'id', 'email', 'github')
    expect(engineer.getRole()).toBe('Engineer');
});

test('GitHub username', () => {
    const GitHub = 'JDavid337@';
    const engineer = new Engineer('name', 'id', 'email', gitHubName, 'role');
    expect(engineer.getGitHub()).toBe(gitHubName);
});

test('engineer name', () => {
    const name = 'John';
    const engineer = new Engineer(name, 'id', 'email', 'gitHubName', 'role');
    expect(engineer.name()).toBe(name);
});

test('GitHub id', () => {
    const GitHub = 'JDavid337@';
    const engineer = new Engineer('name', id, 'email', 'gitHubName', 'role');
    expect(engineer.id()).toBe(id);
});

test('GitHub email', () => {
    const GitHub = 'JDavid337@';
    const engineer = new Engineer('name', 'id', email, 'gitHubName', 'role');
    expect(engineer.email()).toBe(email);
});

test('GitHub roll', () => {
    const GitHub = 'JDavid337@';
    const engineer = new Engineer('name', 'id', 'email', 'gitHubName', role);
    expect(engineer.role()).toBe(role);
});