import type { NextApiRequest, NextApiResponse } from "next";
import JsonUtils from "./jsonUtils";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const todoLists = (await JsonUtils.read()).todoLists;
  res.status(200).json(JSON.stringify(todoLists));
}
