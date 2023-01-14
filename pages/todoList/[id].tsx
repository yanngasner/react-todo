import { TodoListModel } from "@/models/TodoListModel";
import TodoItem from "../../components/TodoItem";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import TodoList from "@/components/TodoList";
import Router from "next/router";


const TodoListPage = () => {
    const router = useRouter()
    const { id } = router.query;
    const [todoList, setToDoList] = useState<TodoListModel | null>(null);
    const deleteList = () => {
        fetch(`/api/delete-one/${id}`, {
            method: "POST",
            body: JSON.stringify(todoList),
        }).then((res) => Router.push("/"));
        //TODO : handle error => message 
    }
    const updateList = (todoList: TodoListModel) => {
        setToDoList(todoList);
        fetch(`/api/update-one/${id}`, {
            method: "POST",
            body: JSON.stringify(todoList),
        });
        //TODO : handle error => rollback + message
    }
    useEffect(() => {
        if (id != undefined) {
            fetch(`/api/read-one/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    setToDoList(JSON.parse(data));
                })
        }
    }, [id])


    return (
        todoList
            ? <TodoList
                todoList={todoList}
                updateList={updateList}
                deleteList={deleteList}
            />
            : <></>
    );
}

export default TodoListPage;