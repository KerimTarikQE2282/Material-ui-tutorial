import React, { useEffect, useState } from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/styles'
import NotesCard from '../Components/NotesCard'
const Mystyle=makeStyles({
  margin:{
    marginTop:20
  }
})
export default function Notes() {
  const Style=Mystyle()
  const [notes,setNotes]=useState([])
  useEffect(()=>{
fetch('http://localhost:8000/notes')
.then(res=>res.json())
.then(data=>setNotes(data))
  },[])
 const HandleDelete =async(id)=>{
  fetch(  'http://localhost:8000/notes/'+id ,{
method:'DELETE'
  })
  const newNotes=notes.filter((note)=>{
    return (
      note.id != id
    )
  })
  setNotes(newNotes)
 }
  return (
    <Container>
     { /*
     notes=>notes.id != id
     <Grid container>
      <Grid item xs={3} sm={6} lg={12} >
        <Paper>1</Paper>
      </Grid>
      <Grid item xs={3} sm={6} lg={12} >
        <Paper>2</Paper>
      </Grid>
      <Grid item xs={3} sm={6} lg={12} >
        <Paper>3</Paper>
      </Grid>
      <Grid item xs={3} sm={6} lg={12} >
        <Paper>4</Paper>
      </Grid>

      </Grid>*/}
      <Grid container  spacing={10} >
    {notes.map(note=>{
      return(
        <Grid 
        item
        key={note.id}
        xs={12}
        md={6}
        lg={3}
       >
        
        <NotesCard note={note} HandleDelete={HandleDelete}/>
        </Grid>
      )
    })}
    </Grid>
    
    </Container>
  )
}
