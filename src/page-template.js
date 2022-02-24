const managerCard = managerInfo => {
    return `<li class="card">
    <div class="card-title">
        <h2>${managerInfo[0].name}</h2>
        <h3><i class="fa-solid fa-mug-hot"></i> Manager</h3>
    </div>
    <div class="card-body">
        <ul>
            <li>ID: ${managerInfo[0].id}</li>
            <li>Email: <a href="mailto:${managerInfo[0].email}">${managerInfo[0].email}</a></li>
            <li>Office Number: ${managerInfo[0].officeNumber}</li>
        </ul>
    </div>
</li>`;
}

const engineerCard = engineerInfo => {
    let engineerCards = ``;
    engineerInfo.forEach(engineer => {
        engineerCards += `
<li class="card">
    <div class="card-title">
        <h2>${engineer.name}</h2>
        <h3><i class="fa-solid fa-glasses"></i> Engineer</h3>
    </div>
    <div class="card-body">
        <ul>
            <li>ID: ${engineer.id}</li>
            <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li>GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
        </ul>
    </div>
</li>`;
    });
    return engineerCards;
}

const internCard = internInfo => {
    let internCards = ``;
    internInfo.forEach(intern => {
        internCards += `
<li class="card">
    <div class="card-title">
        <h2>${intern.name}</h2>
        <h3><i class="fa-solid fa-user-graduate"></i> Intern</h3>
    </div>
    <div class="card-body">
        <ul>
            <li>ID: ${intern.id}</li>
            <li>Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li>School: ${intern.school}</li>
        </ul>
    </div>
</li>`;
    });
    return internCards;
}

// Generate HTML page
module.exports = profileData => {
    const { manager, engineers, interns } = profileData;

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <!-- Font Awesome -->
        <script src='https://kit.fontawesome.com/d6ff1e54be.js' crossorigin='anonymous'></script>
        <!-- Google Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&display=swap">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            <ul class="profiles">
                ${managerCard(manager)}
                ${engineerCard(engineers)}
                ${internCard(interns)}
            </ul>
        </main>
    </body>
    </html>`;
}