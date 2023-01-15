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
    const deleteItem = (id: number) => {
        const updatedList: TodoListModel = {
            ...todoList,
            todoItems: [...todoList.todoItems.filter(item => item.id !== id)]
        }
        updateList(updatedList);
    }
    const updateItem = (updatedItem: TodoItemModel, moveDown = false) => {
        let updatedList: TodoListModel = {
            ...todoList,
            todoItems: [...todoList.todoItems]
        }
        if (moveDown) {
            updatedList.todoItems = [...updatedList.todoItems.filter(item => item.id !== updatedItem.id), updatedItem];
        }
        else {
            updatedList.todoItems.forEach((item, index) => {
                if (item.id === updatedItem.id) {
                    item.achieved = updatedItem.achieved;
                    item.name = updatedItem.name;
                }
            });
        }
        updateList(updatedList);
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
                    updateItem={updateItem}
                    deleteItem={deleteItem}
                />)
            }
            <div></div>
            <button onClick={onDeleteListClicked}>Supprimer</button>
            <button onClick={onClearListClicked}>Nettoyer</button>
        </>
    );
}

export default TodoList;