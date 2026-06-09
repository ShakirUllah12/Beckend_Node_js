import { readFile, writeFile,appendFile } from "fs/promises";

// const write_File = async (fileName, content) => {
//     await writeFile(fileName, content);
//     console.log("file is created successfully");
// };

// write_File("third.txt", "thhhfghjgm");

const append_File=async (fileName,content)=>{
    await appendFile(fileName,content)
    console.log("server is running")
}

append_File("third.txt","no i dont want to say anything")