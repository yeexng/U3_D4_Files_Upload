import fs from "fs-extra";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const { readJSON, writeJSON, writeFile } = fs;

// C:\Users\xuan\Desktop\FS 05-22\Unit 4\U4_D4_Files_Upload\src\data
const dataFolderPath = join(dirname(fileURLToPath(import.meta.url)), "../data");
console.log("DATA PATH:", dataFolderPath);
const authorsJSONPath = join(dataFolderPath, "authors.json");
const blogPostsJSONPath = join(dataFolderPath, "blogPosts.json");
const blogPostsPublicFolderPath = join(process.cwd(), "./public/img/blogPosts");
console.log(blogPostsPublicFolderPath);

export const getAuthors = () => readJSON(authorsJSONPath);
export const writeAuthors = (authorsArray) =>
  writeJSON(authorsJSONPath, authorsArray);
export const getBlogPosts = () => readJSON(blogPostsJSONPath);
export const writeBlogPosts = (blogPostsArray) =>
  writeJSON(blogPostsJSONPath, blogPostsArray);

export const saveCoverImage = (fileName, fileContentAsBuffer) =>
  writeFile(join(blogPostsPublicFolderPath, fileName), fileContentAsBuffer);
