const fs = require("fs");

const writeHTML = (fileContent) => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", fileContent, err => {
            if (err) {
                reject(err);
                return;
            };
            resolve({
                ok: true,
                message: "HTML file generated."
            });
        });
    });
};

const copyCSS = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile("./src/style.css", "./dist/style.css", err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "CSS file copied."
            });
        });
    });
};

module.exports = { writeHTML, copyCSS };