// create templates for the cards and HTML

const fs = require("fs");
const path = require("path");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateHTML = require("./lib/htmlRenderer");


const inquirer = require("inquirer");
//const generateHTML = require("./TemplateFunctions/template");


// ask for user input to go into the cards

const MyTeam = [];
    function getManager() {
        inquirer.prompt ([
    {
        type: "input",
        name: "managerName",
        message: "What is your team manager's name?",
    },
    {
        type: "input",
        name: "managerId",
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

        ]).then(response => {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.officeNumber);
            MyTeam.push(manager);
            addingNewMember();
        })
    }
function addingNewMember(){
    inquirer.prompt([
        {
            type: "list",
            name: "team",
            message: "Do you want to add a member to your team?  If yes, select their role.",
            choices: ["Engineer", "Intern", "Team is full"],
        },
    ]).then(response => {
        if (response.team === 'Manager') {
            getManager();
        } else if (response.team === "Engineer") {
            getEngineer();
        } else if (response.team === "Intern") {
            getIntern();
        } else {
            finishTeam();
            
        }
    });
}
/*    {
        type: "list",
        name: "team",
        message: "Do you want to add a member to your team?  If yes, select their response.team.",
        choices: ["Engineer", "Intern", "Team is full"],
    }
} */

const getEngineer = () => {
    inquirer.prompt([

    {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?",
    },
    {
        type: "input",
        name: "engineerID",
        message: "What is your engineer's ID number?",
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?",
    },
    {
        type: "input",
        name: "engineerGitHub",
        message: "What is your engineer's GitHub username?",
    },

]).then(response => {
    const engineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerGitHub);
    MyTeam.push(engineer);
            addingNewMember();
})
}

const getIntern = () => {
    inquirer.prompt([
    {
        type: "input",
        name: "internName",
        message: "What is your intern's name?",
    },
    {
        type: "input",
        name: "internID",
        message: "What is your intern's ID number?",
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email?",
    },
    {
        type: "input",
        name: "internSchool",
        message: "What school does your intern currently attend?",
    },

]).then(response => {
    const intern = new Intern(response.internName, response.internID, response.internEmail, response.internSchool);
    MyTeam.push(intern);
    addingNewMember();

})
}
function finishTeam () {
    let answers = generateHTML(MyTeam);
        fs.writeFileSync("team.html", answers, "utf-8");
}

//init(generateHTML(MyTeam));

getManager()