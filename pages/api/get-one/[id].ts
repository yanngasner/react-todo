// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { id } = req.query;
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "json");
  //Read the json data file data.json
  const content = await fs.readFile(jsonDirectory + "/data.json", "utf8");
  //Return the content of the data file in json format
  const todoLists = JSON.parse(content).todoLists;
  const todoList = todoLists.find((list: any) => list.id == id) ?? {};
  res.status(200).json(JSON.stringify(todoList));
}
