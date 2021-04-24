const { expect } = require('@jest/globals');
const { ecNormalize } = require("sshpk");
const Manager = require('../lib/Manager');

// TextDecoderStream('Updated role with Engineer.', () => {
test("Create Manager", () => {
    const boss = new Manager('name', 'role', 'id', 'email', 'officeNumber');
    expect(engineer.getRole()).toBe('Engineer');
});

test('Manager name', () => {
    const name = 'Paul Allen';
    const manager = new Manager(name, 'role', 'id', 'email', 'officeNumber');
    expect(manager.getName()).toBe(name);
});

test('Manager role', () => {
    const name = 'Boss';
    const manager = new Manager('name', role, 'id', 'email', 'officeNumber');
    expect(manager.getRole()).toBe(role);
});

test('Manager ID', () => {
    const name = '1';
    const manager = new Manager('name', 'role', ID, 'email', 'officeNumber');
    expect(manager.getId()).toBe(ID);
});

test('Manager email', () => {
    const name = 'Paul.Allen@gmail.com';
    const manager = new Manager('name', 'role', 'id', email, 'officeNumber');
    expect(manager.getEmail()).toBe(email);
});

test('Manager officeNumber', () => {
    const officeNumber = '615-555-0304';
    const manager = new Manager('name', 'role', 'id', 'email', officeNumber);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
});