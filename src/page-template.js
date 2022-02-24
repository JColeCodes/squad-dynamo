// Get Role Icon
const getIcon = role => {
    if (role == 'Manager') {
        return `<i class="fa-brands fa-black-tie"></i>`;
    } else if (role == 'Engineer') {
        return `<i class="fa-solid fa-laptop-code"></i>`;
    } else if (role == 'Intern') {
        return `<i class="fa-solid fa-user-graduate"></i>`;
    } else {
        return;
    }
}

// Get unique employee information
const getOther = employee => {
    if (employee.getRole() == 'Manager') {
        return `Office Number: ${employee.getOfficeNumber()}`;
    } else if (employee.getRole() == 'Engineer') {
        return `GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`;
    } else if (employee.getRole() == 'Intern') {
        return `School: ${employee.getSchool()}`;
    } else {
        return;
    }
}

// Generate each employee card
const generateCard = profileData => {
    let cards = ``;
    profileData.forEach(employee => {
        cards += `    <li class="card">
                <div class="card-title">
                    <h2>${employee.getName()}</h2>
                    <h3>${getIcon(employee.getRole())} ${employee.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul>
                        <li>ID: ${employee.getId()}</li>
                        <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                        <li>${getOther(employee)}</li>
                    </ul>
                </div>
            </li>`
    });
    return cards;
}

// Generate HTML page
const generatePage = profileData => {
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
        <h1><i class="fa-solid fa-users"></i> My Team</h1>
    </header>
    <main>
        <ul class="profiles">
        ${generateCard(manager)}${generateCard(engineers)}${generateCard(interns)}
        </ul>
    </main>
</body>
</html>`;
};

module.exports  = generatePage;