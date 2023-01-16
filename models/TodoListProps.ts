import { TodoListModel } from "./TodoListModel";

export interface TodoListProps {
  todoList: TodoListModel;
  updateList: (todoList: TodoListModel) => void;
  deleteList: () => void;
}
