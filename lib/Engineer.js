const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github, Role) {
        super(name, id, email, Role);
        this.github = github;
    }

    getgithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

}

module.exports = Engineer