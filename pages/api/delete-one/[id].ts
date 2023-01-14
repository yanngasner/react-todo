import { TodoListModel } from "@/models/TodoListModel";
import type { NextApiRequest, NextApiResponse } from "next";
import JsonUtils from "../jsonUtils";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { id } = req.query;
  let todoLists: TodoListModel[] = (await JsonUtils.read()).todoLists;
  todoLists = todoLists.filter((list) => list.id.toString() != id);
  await JsonUtils.write(JSON.stringify({ todoLists: todoLists }));
  res.status(200).json("");
}
