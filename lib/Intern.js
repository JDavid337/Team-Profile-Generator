const Employee = require("./Employee")


class Intern extends Employee {
    constructor(name, id, email, github, school) {
        super(name, id, email, github, school)
        super(name, id, email)
        this.github = github;
        this.school = school;
    }

    getGithub() {
        return this.github
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern"
    }

}

module.exports = Intern