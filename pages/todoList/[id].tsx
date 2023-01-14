import { TodoListModel } from "@/models/TodoListModel";
import TodoItem from "./TodoItem";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";


const TodoList = () => {
    const router = useRouter()
    const { id } = router.query;
    const [todoList, setToDoList] = useState<TodoListModel | null>(null);
    useEffect(() => {
        fetch(`/api/get-one/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setToDoList(JSON.parse(data));
            })
    }, [id])
    return (
        todoList ?
            <>
                <div>{todoList.id}</div>
                <div>{todoList.name}</div>
                <div>{todoList.description}</div>
                {todoList?.todoItems?.map(item => <TodoItem key={item.id} todoItem={item} />)}
            </> :
            <></>
    );
}

export default TodoList;