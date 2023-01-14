import { TodoItemModel } from "@/models/TodoItemModel";
import { TodoListModel } from "@/models/TodoListModel";
import { isTemplateExpression } from "typescript";
import TodoItem from "./TodoItem";


interface TodoListProps {
    todoList: TodoListModel;
    updateList: (todoList: TodoListModel) => void;
    deleteList: () => void;
}

const TodoList: React.FC<TodoListProps> = ({ todoList, updateList, deleteList }) => {
    const onClearListClicked = () => {
        const updatedList: TodoListModel = {
            ...todoList,
            todoItems: [...todoList.todoItems.filter(item => !item.achieved)]
        }
        updateList(updatedList);
    }
    const onDeleteListClicked = () => {
        deleteList();
    }
    return (
        <>
            <div>{todoList.id}</div>
            <div>{todoList.name}</div>
            <div>{todoList.description}</div>
            {todoList.todoItems.map(item =>
                <TodoItem
                    key={item.id}
                    todoItem={item}
                />)
            }
            <button onClick={onDeleteListClicked}>Supprimer</button>
            <button onClick={onClearListClicked}>Nettoyer</button>
        </>
    );
}

export default TodoList;