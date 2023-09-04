import React, {FC} from 'react';

import {Collapse, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText,Checkbox, Typography, Button } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import store from '../../store/todo';

type TProps = {
    title: string;
    desc: string;
    date: string;
    id: string;
}
export const TodoItem:FC<TProps> = ({title, desc, date,id}) => {
    let [open,setOpen] = React.useState(false);
    let [status, setStatus] = React.useState(false);

    const handleDescr = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItem sx={{justifyContent: 'space-between', alignItems: 'start'}}>
                <Typography  variant="h6" component='h6' sx={{ width: '120px', textDecoration: status ? 'line-through': '', wordWrap: 'break-word'}} >
                    {title}
                </Typography>

                <IconButton onClick={handleDescr} edge="end" aria-label="comments">
                    <CommentIcon />
                </IconButton>
                <Checkbox onClick={() => setStatus(!status)}></Checkbox>

                <Button onClick={() => store.delete(id)} size='small' variant="outlined" >DELETE</Button>
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem  sx={{ pl: 4, flexDirection: 'column', alignItems: 'start'}}>
                        <IconButton sx={{margin: '0 auto'}} onClick={handleDescr}>
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                        <Typography paragraph={true} sx={{width: '100%', wordWrap: 'break-word'}} variant={'subtitle1'} component='p'>
                            {desc}
                        </Typography>
                        <ListItemText sx={{ml: 'auto'}} primary={date} />
                    </ListItem>
                </List>
            </Collapse>
        </>


    )
}