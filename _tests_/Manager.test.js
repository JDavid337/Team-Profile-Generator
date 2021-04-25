const { expect } = require('@jest/globals');
const { ecNormalize } = require("sshpk");
const Manager = require('../lib/Manager');

// TextDecoderStream('Updated role with Engineer.', () => {
test("Create Manager", () => {
    const boss = new Manager('name', 'role', 'id', 'email', 'officeNumber');
    expect(boss.getRole()).toBe('Manager');
});
/*
test('Manager name', () => {
    const name = 'What is the manager name';
    const manager = new Manager(name, 'role', 'id', 'email', 'officeNumber');
    expect(manager.getname()).toBe(name);
});

test('Manager role', () => {
    const role = 'Boss';
    const manager = new Manager('name', role, 'id', 'email', 'officeNumber');
    expect(manager.getRole()).toBe(role);
});

test('Manager ID', () => {
    const ID = '1';
    const manager = new Manager('name', 'role', ID, 'email', 'officeNumber');
    expect(manager.getId()).toBe(ID);
});

test('Manager email', () => {
    const email = 'Enter the managers email here';
    const manager = new Manager('name', 'role', 'id', email, 'officeNumber');
    expect(manager.getEmail()).toBe(email);
});
*/
test('Office Number', () => {
    const officeNumber = 3;
    const boss = new Manager('name', 'role', 'id', officeNumber, 'email');
    expect(boss.getOfficeNumber()).toBe(officeNumber);
});