const {readFileSync, writeFileSync} = require('fs')

//Below line will create a new file and writes in it or if file with given name is already present then write in that file
writeFileSync('./pdfs/newPDF.txt', `This is the PDF file created with node.js`)

//Below line will read data from the file and store it in variable "readData" which we can print in console
const readData = readFileSync('./pdfs/newPDF.txt', 'utf8')
console.log(readData);