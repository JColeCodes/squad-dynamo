const generatePage = require('./src/page-template');
const { promptManager, promptProfiles } = require('./utils/questions');

promptManager()
    .then(promptProfiles);
    // .then(portfolioData => {
    //     return generatePage(portfolioData);
    // })
    // .then(pageHTML => {
    //     return writeFile(pageHTML);
    // })
    // .then(writeFileResponse => {
    //     console.log(writeFileResponse);
    //     return copyFile();
    // })
    // .then(copyFileResponse => {
    //     console.log(copyFileResponse);
    // })
    // .catch (err => {
    //     console.log(err);
    // });