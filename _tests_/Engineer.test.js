const { expect } = require('@jest/globals')
const Engineer = require('../lib/Engineer')

TextDecoderStream('Updated role with Engineer.', () => {
    const E = new Engineer('name', 'id', 'email', 'github')
    expect(E.getRole()).toBe('Engineer')
})

test('Can set a github username in the constructor.', () => {
    const github = 'JDavid337@'
    const E = new Engineer('name', 'id', 'email', github)\
    expect()
})