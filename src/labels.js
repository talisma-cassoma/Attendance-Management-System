import { readFile } from 'fs/promises'

const File = {
     async readJson(filePath){
        const content = await File.getFileContent(filePath)
        return content
    }, 
     async getFileContent(filePath){
        const fileContent =  JSON.parse( await readFile(filePath) )
        return fileContent
    }
}

const Labels = {
    async read(){
        const result = await File.readJson("public/assets/uploads/labels.json")
        return result
    }, 
    async save(){
        return;
    }
}

export { Labels } 

