import fs from "fs"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename) + "\\"


let fileContents = fs.readFileSync(__dirname + '\\files.json')
let fileList = JSON.parse(fileContents)

let fixSlashes = pth => pth.split("/").join("\\")

const warningNotice = "//NODE VERSION, see ../build/\n\n"
const destDir = __dirname + "..\\src\\"

const buildDir = __dirname + ".\\node\\"

for(let file of fileList){

	fs.writeFileSync(destDir + fixSlashes(file.destination),
		warningNotice + fs.readFileSync(buildDir + fixSlashes(file.buildName))
	)

}

console.log("written node build placeholders")