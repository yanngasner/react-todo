import { useEffect, useRef, useState } from "react";

import styles from '@/styles/TodoList.module.css';

import { TodoItemModel } from "@/models/TodoItemModel";
import { TodoListModel } from "@/models/TodoListModel";
import { TodoListProps } from "@/models/TodoListProps";
import { useListActions } from "@/services/useListActions";
import TodoItem from "./TodoItem";
import { Center, Divider, Icon, IconButton, Input, Tooltip } from "@chakra-ui/react";
import { MdCleaningServices } from 'react-icons/md'
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";



const TodoList: React.FC<TodoListProps> = ({ todoList, updateList, deleteList }) => {

    const [itemName, setItemName] = useState<string>("");
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingDescription, setIsEditingDescription] = useState(false);
    const nameInputRef = useRef(null);
    useEffect(() => {
        if (isEditingName && nameInputRef.current) {
            nameInputRef.current.focus();
        }
    }, [isEditingName]);
    const descriptionInputRef = useRef(null);
    useEffect(() => {
        if (isEditingDescription && descriptionInputRef.current) {
            descriptionInputRef.current.focus();
        }
    }, [isEditingDescription]);
    const [onClearListClicked, onDeleteListClicked, onItemAdded, onListRenamed, onDescriptionChanged, deleteItem, updateItem]
        = useListActions({ todoList, updateList, deleteList });

    const onKeyDown = (key: string) => {
        if (['Enter', 'Escape'].includes(key)) {
            setIsEditingName(false);
            setIsEditingDescription(false);
        }
    }
    const onAddKeyDown = (key: string) => {
        if (key == 'Enter') {
            onAddItemClicked();
        }
    }
    const onAddItemClicked = () => {
        onItemAdded(itemName);
        setItemName('');
    }

    return (
        <div className={styles.container}>
            <div className={styles.todoList}>
                <div className={styles.head}>
                    <div className={styles.titleArea}>
                        <div className={styles.headFirst}>
                            <div className={styles.headButtonItem}>
                            </div>
                            <div className={styles.listName}
                                onClick={() => setIsEditingName(true)}
                                onMouseOut={() => setIsEditingName(false)}
                                onBlur={() => setIsEditingName(false)} >
                                {isEditingName ?
                                    <div className={styles.nameInput}>
                                        <Input focusBorderColor='#107980' size='lg' sx={{ textAlign: 'center' }}
                                            ref={nameInputRef}
                                            value={todoList.name}
                                            onChange={(event) => onListRenamed(event.target.value)}
                                            onKeyDown={(event) => onKeyDown(event.key)}
                                        />
                                    </div>
                                    : <h1>{todoList.name}</h1>
                                }
                            </div>
                            <div className={styles.headButtonItem}>
                                <IconButton icon={<DeleteIcon />} onClick={onDeleteListClicked} colorScheme='teal' aria-label={""} />
                            </div>
                        </div>
                        <div className={styles.listDescription}
                            onClick={() => setIsEditingDescription(true)}
                            onMouseOut={() => setIsEditingDescription(false)}
                            onBlur={() => setIsEditingDescription(false)} >
                            {isEditingDescription ?
                                <div className={styles.descriptionInput}>
                                    <Input focusBorderColor='#107980' sx={{ textAlign: 'center' }}
                                        ref={descriptionInputRef}
                                        value={todoList.description}
                                        onChange={(event) => onDescriptionChanged(event.target.value)}
                                        onKeyDown={(event) => onKeyDown(event.key)}
                                    />
                                </div>
                                : <h2>{todoList.description}</h2>
                            }
                        </div>
                    </div>
                    <div className={styles.buttonItem}>
                        <IconButton icon={<Icon as={MdCleaningServices} />} onClick={onClearListClicked} colorScheme='teal' aria-label={""} />
                    </div>

                </div>
                <Center height='5%'>
                    <Divider />
                </Center>
                <div className={styles.items}>
                    {todoList.todoItems.map(item =>
                        <TodoItem
                            key={item.id}
                            todoItem={item}
                            updateItem={updateItem}
                            deleteItem={deleteItem}
                        />)
                    }
                </div>
                <Center height='5%'>
                    <Divider />
                </Center>
                <div className={styles.addArea}>
                    <div className={styles.buttonItem}>
                    </div>
                    <div className={styles.addInput}>
                        <Input focusBorderColor='#107980' size='lg' sx={{ textAlign: 'center' }}
                            value={itemName}
                            onChange={e => setItemName(e.target.value)}
                            onKeyDown={(event) => onAddKeyDown(event.key)}
                        />
                    </div>
                    <div className={styles.buttonItem}>
                        <IconButton icon={<AddIcon />} onClick={onAddItemClicked} colorScheme='teal' aria-label={""} />
                    </div>
                </div>

            </div>
        </div>

    );
}

export default TodoList;