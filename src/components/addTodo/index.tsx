import {FC, useEffect, useState} from 'react';
import {Box, Button, FormControl, FormLabel, Modal, TextField, Typography} from '@mui/material';
import store from '../../store/todo';
import {createId, createDate} from '../../helpers';
import { Label } from '@mui/icons-material';

const formStyle = {
    gap: '35px',
    bgcolor: 'background.paper',
    width: '100%',
    maxWidth: '560px',
    justifyContent: 'center',
    alignItems: 'center',
    p: '45px 15px',
    borderRadius: '10px'

}
const modalStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
type TProps = {
    open: boolean,
    close: () => void,
}

export const AddTodo: FC<TProps> = ({open, close}) => {
    let [isOpen, setIsOpen] = useState(open);
    let [todo, setTodo] = useState({title: '',description: '', date: createDate(), id:  createId()});
    let [isValid, setIsValid] = useState(true);
    let [disabled, setDisabled] = useState(true);

    const clearInputs = () => {
        setTodo({title: '', description: '',date: createDate(), id:  createId()})
    }

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({...todo, title: e.target.value});

    }

    const handleDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({...todo, description: `${e.target.value}`})
        console.log(todo)
    }

    const addTodo = () => {
        store.add(todo);
        close();
        clearInputs();
    }
    useEffect(() => {
        setIsOpen(open)
    },[open]);

    useEffect(() => {
      todo.title.length - 1 < 21 ? setIsValid(false) : setIsValid(true);
      todo.title.length - 1 < 21 && todo.title.length - 1 > 2 ? setDisabled(false) : setDisabled(true);
    },[todo.title])

    return (
    <Modal open={isOpen} style={modalStyle}>
            <FormControl sx={formStyle}>
                <Typography variant='h5' component='h6' sx={{pb: '30px'}}>
                    Add new Todo
                </Typography>
                <TextField
                    error={isValid}
                    required
                    id="title-input"
                    label="Title"
                    sx={{width: '90%'}}
                    value={todo.title}
                    onChange={handleTitle}
                    helperText={isValid ? "Please enter short title, maximum 20 characters" : ""}
                />
                <TextField
                    id="description-input"
                    label='Description'
                    multiline
                    rows={4}
                    sx={{width: '90%'}}
                    value={todo.description}
                    onChange={handleDesc}
                />
                <Box sx={{width: '90%',display: 'flex', justifyContent: 'space-between'}}>
                    <Button onClick={close} variant="outlined">Close</Button>
                    <Button onClick={addTodo} color='success' disabled={disabled} variant="contained">Add</Button>
                </Box>
            </FormControl>

    </Modal>)
}