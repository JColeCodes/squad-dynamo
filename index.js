const generatePage = require('./src/page-template');
const { profiles, promptManager, promptProfiles } = require('./utils/questions');

const mockData = {
    manager: [
      {
        name: 'rew',
        id: '321',
        email: 'dfsa@fweda.c',
        officeNumber: '321d'
      }
    ],
    engineers: [
      {
        name: 'fds',
        id: '43',
        email: 'fdsvca@dwsa.c',
        github: 'fdsfew'
      },
      {
        name: 'webva',
        id: '324',
        email: 'uytaewd@ds.bg',
        github: 'rtewa'
      },
      {
        name: 'tre',
        id: '987',
        email: 'dbvf@grefw.c',
        github: 'rfdqbgrg'
      }
    ],
    interns: [
      {
        name: 'tgerfwa',
        id: '32135',
        email: 'egrsfawe@erfw.cd',
        school: 'gewrqwq'
      },
      {
        name: 'raw',
        id: '54',
        email: 'bgfds@geraw.csa',
        school: 'wbre'
      }
    ]
};

console.log(generatePage(mockData));
//    .then(html => console.log(html))
// promptManager()
//     .then(promptProfiles)
//     .then(generatePage(mockData))
//     .then(html => console.log(html))
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
//    .catch (err => console.log(err));