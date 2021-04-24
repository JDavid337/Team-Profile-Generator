// create templates for the cards and HTML

const fs = require("fs");
const path = require("path");

const Employee = require("./lib/Employee");
const Team = new Employee();
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML");
const { inherits } = require("util");

// ask for user input to go into the cards

const MyTeam = [];

const queManager = [
    {
        type: "input",
        name: "name",
        message: "What is your team manager's name?",
    },
    {
        type: "input",
        name: "ID",
        message: "What is your team manager's ID number?",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "what is the manager's email?",
    /*    validate: answer => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
                return true
            }
            return "please enter an email address"
        }*/
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your team manager's office number?",
    },
    {
        type: "list",
        name: "team",
        message: "Do you want to add a member to your team?  If yes, select their role.",
        choices: ["Engineer", "Intern", "Team is full"],
    },
];

const queEngineer = () => {
[
    {
        type: "input",
        name: "name",
        message: "What is your engineer's name?",
    },
    {
        type: "input",
        name: "ID",
        message: "What is your engineer's ID number?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your engineer's email?",
    },
    {
        type: "input",
        name: "gitHub",
        message: "What is your engineer's GitHub username?",
    },
    {
        type: "list",
        name: "team",
        message: "Do you want to add a member to your team?  If yes, select their role.",
        choices: ["Engineer", "Intern", "Team is full"],
    },
];


const queIntern = () => {
[
    {
        type: "input",
        name: "name",
        message: "What is your intern's name?",
    },
    {
        type: "input",
        name: "ID",
        message: "What is your intern's ID number?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your intern's email?",
    },
    {
        type: "input",
        name: "school",
        message: "What school does your intern currently attend?",
    },
    {
        type: "list",
        name: "team",
        message: "Do you want to add a member to your team?  If yes, select their role.",
        choices: ["Engineer", "Intern", "Team is full"],
    },
]
.then((answers) => {
    MyTeam.push(
        new Engineer(answers.name, answers.id, answers.email, answers.GitHub)
    );
    if (answers.team === "Engineer") {
        queEngineer();
    } else if (answers.team === "Intern") {
        queIntern();
    } else {
        let answers = generateHTML(MyTeam);
        fs.writeFileSync("team.html", "answers", "utf-8");
    }
});
};

init();

}

// dynamically create employee cards