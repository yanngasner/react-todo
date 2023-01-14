import { TodoItemModel } from "./TodoItemModel";

export interface TodoListModel {
  id: number;
  name: string;
  todoItems: TodoItemModel[];
  description: string;
}
