const generatePage = require("./src/page-template");
const { promptManager, promptProfiles } = require('./utils/questions');

promptManager()
    .then(promptProfiles)
    .then(profileData => {
        return generatePage(profileData)
    })
    .then(pageHTML => {
        console.log(pageHTML);
    })
   .catch (err => console.log(err));