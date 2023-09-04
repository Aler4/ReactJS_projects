import { Box, Button } from '@mui/material';
import {FC, useState} from 'react';
import {AddTodo, TodoList } from '..';

export const TodoView: FC = () => {

    let [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true)
    };

    const closeModal = () => setModalIsOpen(false);

    return (
        <Box  sx={{width: '100%', maxWidth: '760px', bgcolor: 'background.paper', textAlign: 'right'}} >
            <Button onClick={openModal} sx={{mb: "50px"}} variant="contained" color="success">Add Todo</Button>
            <AddTodo close={closeModal} open={modalIsOpen}></AddTodo>
            <TodoList></TodoList>

        </Box>
    )
}