import type { NextApiRequest, NextApiResponse } from "next";
import JsonUtils from "../jsonUtils";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { id } = req.query;
  const todoLists = (await JsonUtils.read()).todoLists;
  const todoList = todoLists.find((list: any) => list.id == id) ?? {};
  res.status(200).json(JSON.stringify(todoList));
}
