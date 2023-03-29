import React, { useState } from 'react'
import { TextField, Typography } from '@material-ui/core'
import {Container} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import RemoveIcon from '@mui/icons-material/Remove';
import {makeStyles} from '@material-ui/core'

const Styles=makeStyles({
  margin:{
    marginTop:30,
    marginBottom:30
    
  }
})
const Remove = () => {
    const MyStyle=Styles()
    const [title,setTitle]=useState("")
    const [titleError,setTitleError]=useState(false)
    function changed(e){
   setTitle(e.target.value)
   
    }
    function HandleSubmit(e){
      e.preventDefault()
      if(title == ""){
        setTitleError(true)
      }
      console.log("submitted")
      console.log(title)
    }
  return (
    <Container>
      <Typography
      variant='h6'
      component='h2'
      color='Primary'
     
      >
        Remove page
      </Typography>
      <form onSubmit={HandleSubmit}>  
        <TextField
        onChange={changed}
        label='title'
        variant='outlined'
        className={MyStyle.margin}
        
       error={titleError}
       required
        />
          <br/>
                <Button 
      type='submit'
      variant='contained'
      startIcon={<RemoveIcon/>}
      endIcon={<RemoveIcon/>}
      color='secondary'
     
      >
      remove
      
      </Button>
      
    
      </form>

    </Container>
  )
}

export default Remove
