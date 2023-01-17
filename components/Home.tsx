import { TodoListModel } from '@/models/TodoListModel';
import styles from '@/styles/Home.module.css'
import { AddIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import Router from "next/router";
import { useEffect, useState } from 'react';
import TodoListCard from './TodoListCard';

const Home = () => {
    const [todoLists, setToDoLists] = useState<TodoListModel[]>([]);
    const onAddListClicked = () => {
        const newItemId = todoLists.length > 0 ? Math.max(...todoLists.map((list) => list.id)) + 1 : 0;
        fetch(`/api/update-one/${newItemId}`, {
            method: "POST",
            body: JSON.stringify({ id: newItemId, name: 'Liste', description: 'Description', todoItems: [] }),
        }).then((res) => Router.push("/todoList/[id]", `/todoList/${newItemId}`));
        //TODO : handle error => message
    }
    useEffect(() => {
        fetch('/api/read-all')
            .then((res) => res.json())
            .then((data) => {
                setToDoLists(JSON.parse(data));
            })
    }, [])
    return (
        <>
            <main className={styles.main}>
                <div className={styles.grid}>
                    {todoLists.map(todoList => <TodoListCard key={todoList.id} todoList={todoList} />)}
                </div>
                <div className={styles.buttonItem}>
                    <IconButton size='lg' icon={<AddIcon />} onClick={onAddListClicked} colorScheme='teal' aria-label={""} />
                </div>
            </main>
        </>);
}
export default Home;


