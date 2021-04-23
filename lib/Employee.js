class Employee {
    constructor(title, name, id, email) {
        this.title = title;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getTitle() {
        return this.title
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }

}

module.exports = Employee;