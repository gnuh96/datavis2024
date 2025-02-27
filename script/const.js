import { getAllDataFromCSV } from "./modules/data.js";

const DATASET_FILE_PATH = "./dataset/nobel_with_image.csv";
//const DATASET_FILE_PATH = "./dataset/nobel.csv";

const DATA =
  (await getAllDataFromCSV(DATASET_FILE_PATH).catch((error) =>
    console.error("Error:", error)
  )) || [];

const CURRENT_YEAR = new Date().getFullYear();

const CATEGORIES = [
  "Chemistry",
  "Economics",
  "Literature",
  "Medicine",
  "Peace",
  "Physics",
];

export { DATA, CURRENT_YEAR, CATEGORIES };
