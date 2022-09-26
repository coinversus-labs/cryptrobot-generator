const fs = require('fs');
const path = require('path');
const sharp = require("sharp");


for (let counter = 0; counter < 1000; ++counter){

sharp(`./gen1/assets/${counter}.svg`)
.png()
.toFile(`./gen1/assets/${counter}.png`);

}

let directoryPath = path.join(__dirname, 'gen1/assets/');

fs.readdir(directoryPath, function (err, files) {

    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 

    files.forEach(function (file) {
        if(file.includes(".svg")){
        fs.unlink(directoryPath + `${file}`, (err) => {
            if (err) {
                throw err;
            }
            console.log(`${file} deleted`);
        });
        }
    });

});
