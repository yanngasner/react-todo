import { TodoItemModel } from "./TodoItemModel";

export interface TodoItemProps {
  todoItem: TodoItemModel;
  updateItem: (todoItem: TodoItemModel, moveDown: boolean) => void;
  deleteItem: (id: number) => void;
}
