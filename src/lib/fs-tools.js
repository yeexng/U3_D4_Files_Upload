import fs from "fs-extra";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const { readJSON, writeJSON } = fs;

// C:\Users\xuan\Desktop\FS 05-22\Unit 4\U4_D4_Files_Upload\src\data
const dataFolderPath = join(dirname(fileURLToPath(import.meta.url)), "../data");
console.log("DATA PATH:", dataFolderPath);
const authorsJSONPath = join(dataFolderPath, "authors.json");
const blogPostsJSONPath = join(dataFolderPath, "blogPosts.json");

export const getAuthors = () => readJSON(authorsJSONPath);
export const writeAuthors = (authorsArray) =>
  writeJSON(authorsJSONPath, authorsArray);
export const getBlogPosts = () => readJSON(blogPostsJSONPath);
export const writeBlogPosts = (blogPostsArray) =>
  writeJSON(blogPostsJSONPath, blogPostsArray);
