
import React, { useState } from 'react'
import {FormControlLabel, Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { makeStyles } from '@material-ui/styles';
import {TextField} from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from 'react-router-dom';
const Styles=makeStyles({
  margin:{
  margin:20
  },
  dimension:{
    width:400
  }
})
export default function Create() {
  const MyStyles=Styles()
  const history=useHistory()
  const [title,setTitle]=useState('');
  const [text, setText]=useState('');
  const [TitleError,setTitleError]=useState(false);
  const [TextError, setTextError]=useState(false);
  const [category,setCategory]=useState("money")
  
  function changeTitle(e){
    setTitle(e.target.value)
  
  }
  function  changeText(e){
    setText(e.target.value)
   
  }
  function handleSubmit(e){
  e.preventDefault();
  if(title==''){
    setTitleError(true)
  }
  if(text==''){
    setTextError(true)
  }
 if(title && text)
 {
  setTitleError(false)
  setTextError(false)
  fetch('http://localhost:8000/notes',{
    method:'POST',
    headers:{"content-type":"application/json"},
    body:JSON.stringify({title,text,category})
  }).then(() => history.push('/'))
  }
}

  return (
  
    <Container>
     <Container>
    
  <Typography
  variant='h6'
  component='h2'
  gutterBottom
  color='textSecondary'
  
  >
    Create New Notes
  </Typography>
  </Container>
  <Container>
    <form onSubmit={handleSubmit}>
      <TextField
      onChange={(e)=> changeTitle(e)}
       className={MyStyles.margin}
      color="primary"
       label='Notes Title'
      variant='outlined'
      error={TitleError}
      
     
      />
      <br/>
      <Container
      className='MyStyles'
      >
        <FormControl className={MyStyles.margin} variant = "outLined">
        <FormLabel sx={{ fontSize: '1.2rem', color: 'gray' }}>notes catergory</FormLabel>
      <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value) } color="primary">
    <FormControlLabel value="money" control={<Radio/>} label="money" />
    <FormControlLabel value="Todo" control={<Radio/>} label="Todo" />
    <FormControlLabel value="Reminders" control={<Radio/>} label="Reminders" />
    <FormControlLabel value="Work" control={<Radio/>} label="WORk" />
      </RadioGroup>
      </FormControl>
      </Container>
  
      <br/>
      <br/>
        <TextField
        onChange={e => changeText(e)}
       className={MyStyles.margin}
      color="primary"
       label='Notes Details'
      variant='outlined'
      fullWidth
      multiline
      rows={4}
      error={TextError}
      
      
     
      />
<Button
  
 
  type='submit'
  variant='contained'
  color='primary'
 
  endIcon={<KeyboardArrowRightOutlinedIcon/>}
  >
    Submit
  </Button>
    </form>
  </Container>
  <Container>
  
  </Container>
 {  /* <Button
  color='primary'
  type='submit'
  >Submit</Button>
   <Button
  color='secondary'
  type='submit'
  variant='outlined'
  >Submit</Button>
  <ButtonGroup color='primary' variant='contained'>
    <Button>one</Button>
    <Button>two</Button>
    <Button>three</Button>
  </ButtonGroup>*/}
  {/*ioncs */}
  {/*
  <AcUnitOutlinedIcon/>
  <AcUnitOutlinedIcon color='secondary' fontSize='large'/>
  <AcUnitOutlinedIcon color='action' fontSize='large'/>
  <AcUnitOutlinedIcon color='error' fontSize='large'/>
  <AcUnitOutlinedIcon color='disabled' fontSize='large'/>
  <AcUnitOutlinedIcon color='secondary' fontSize='large'/>
*/}
    </Container>
  )
}
