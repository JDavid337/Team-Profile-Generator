// generate the team by firing functions which outputs HTML in a string
const generateTeam = teamMembers => {
    const generateManager = manager => {

    
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Team Generator</title>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateManager(teamMembers[0])};
            </div>
        </div>
    </div>
    <div class="container">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            ${generateTeam(team[0])};
        </div>
    </div>
</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-JEW9xMcG8R=pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
    crossorigin="anonymous"></script>
</body>
</html>`
}};

const generateManager = (manager) => {
    return `<div class="card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
        </div>
    </div>`
};

// const generateEngineer = engineer => {

// };

// const generateIntern = intern => {

// };

/* const generateManager = manager => {
    return `<div>HTML ${manager.getName()}</div>`
}
module.exports = team => {
    return ' '
}
*/

module.exports = generateTeam => {
    return
}
