// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";
import { TodoListModel } from "../components/TodoList";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "json");
  console.log(jsonDirectory);
  //Read the json data file data.json
  const content = await fs.readFile(jsonDirectory + "/data.json", "utf8");
  //Return the content of the data file in json format
  console.log(content);
  res.status(200).json(content);
}
