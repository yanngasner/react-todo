import TodoItem, { TodoItemModel } from "./TodoItem";

export type TodoListModel = {
    id: number;
    name: string;
    todoItems: TodoItemModel[];
}

const TodoList: React.FC<{ todoList: TodoListModel }> = ({ todoList }) => {
    return (
        <>
            {todoList.todoItems.map(item => <TodoItem key={item.id} todoItem={item} />)}
        </>
    );
}

export default TodoList;