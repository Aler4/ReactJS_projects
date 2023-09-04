import React, {FC, useCallback} from 'react';
import {Box, Button, List, Typography } from '@mui/material';
import {TodoItem} from '../todoItem'
import './style.scss';
import store from '../../store/todo'
import { Todo } from '../../types';
import { observer } from 'mobx-react-lite';

export const TodoList:FC = observer(() => {



    return store.todos.length > 0 ?  (
            <List>
                { (store.todos as Todo[]).map((el: Todo) => (<TodoItem key={el.id} title={el.title} desc={el.description} id={el.id}  date={el.date} />))}
            </List>

    ) : ( <Typography sx={{textAlign: 'center'}} variant='h5' component='h5'>Your todo list is empty</Typography>)
});