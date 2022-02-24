const { promptManager, promptProfiles } = require('./utils/questions');
const generatePage = require("./src/page-template");
const { writeHTML, copyCSS } = require("./utils/generate-site");

promptManager()
    .then(promptProfiles)
    .then(profileData => {
        return generatePage(profileData)
    })
    .then(pageHTML => {
        return writeHTML(pageHTML);
    })
    .then(HTMLresponse => {
        console.log(HTMLresponse.message);
        return copyCSS();
    })
    .then(CSSresponse => {
        console.log(CSSresponse.message);
        console.log('Please check the /dist folder for your generated team profile page.')
    })
   .catch (err => console.log(err));