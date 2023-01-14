import path from "path";
import { promises as fs } from "fs";

export default class JsonUtils {
  static read = async () => {
    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), "json");
    //Read the json data file data.json
    const content = await fs.readFile(jsonDirectory + "/data.json", "utf8");
    //Return the content of the data file in json format
    return JSON.parse(content);
  };

  static write = async (data: string) => {
    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), "json");
    //Read the json data file data.json
    const content = await fs.readFile(jsonDirectory + "/data.json", "utf8");
    fs.writeFile(jsonDirectory + "/data.json", data);
  };
}
