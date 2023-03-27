const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	try {
		await fs.writeFile(fileName, fileContent, { flag: 'a+' })
	}
	catch(err){
		console.log(err);
	}
}
const myFileReader = async (fileName) => {
	try{
		const data = await fs.readFile(fileName , {encoding : 'utf-8'})
		console.log(data);
	}
	catch(err){
		console.log(err);
	}
}
const myFileUpdater = async (fileName, fileContent) => {
	try {
		await fs.writeFile(fileName, fileContent, { flag: 'r+' })
	}
	catch(err){
		console.log(err);
	}
}
const myFileDeleter = async (fileName) => {
	try{
		await fs.unlink('./Notes.txt');
		console.log("File Deleted");
	}catch(err){
		console.log(err);
	}
}
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }