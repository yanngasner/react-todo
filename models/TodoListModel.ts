import { TodoItemModel } from "./TodoItemModel";

export type TodoListModel = {
  id: number;
  name: string;
  todoItems: TodoItemModel[];
  description: string;
};
