import { TodoListModel } from '@/models/TodoListModel';
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react';
import TodoListCard from './TodoListCard';

const Home = () => {
    const [todoLists, setToDoLists] = useState<TodoListModel[]>([]);
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
            </main>
        </>);

}
export default Home;


