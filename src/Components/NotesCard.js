import { IconButton, Typography } from '@material-ui/core'
import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import { DeleteOutline } from '@mui/icons-material';

const NotesCard = (props) => {
  return (
    <div>
      <Card elevation={10}>
        <CardHeader
        action={
           <IconButton onClick={()=>props.HandleDelete(props.note.id)}>
            <DeleteOutline/>
           </IconButton> 
        }
        title={props.note.title}
        subheader={props.note.category}
        />
        <CardContent>
            <Typography variant='body2' color='primary'>{props.note.details}</Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default NotesCard
