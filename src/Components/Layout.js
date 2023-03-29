import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useHistory,useLocation } from 'react-router-dom';
import { Drawer, Typography } from '@material-ui/core'
import {makeStyles} from '@material-ui/core'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
const DrawerWidth=240
const Styles=makeStyles({
    children:{
        background:'#f9f9f9',
        width:'100%'
    },
    Drawer:{
    width:DrawerWidth
    },
    paperDrawer:{
    width:DrawerWidth
    },
    root:{
        dislay:"flex"
    },
    active:{
        background:"#f4f4f4"
        
    }
})
function Layout({children}) {
   const MyStyles=Styles();
   const MenuItems=[
    {
        text:"My Notes",
        icon:<SubjectOutlined color='primary'/>,
        path:'/'
    },
    {
        text:"Add Notes",
        icon:<AddCircleOutlineOutlined color='primary'/>,
        path:'/create'
    }
   ]
   const history=useHistory()
   const location=useLocation()
  return (
    <div className={MyStyles.root}>
        
        <Drawer
        variant='permanent'
        anchor='left'
           className={MyStyles.Drawer}
           classes={{paper:MyStyles.paperDrawer}}
        >
            <Typography
            variant='h6'
            color='Primary'
            >
            kerim  Notes
            </Typography>
            <List>
                {
                    MenuItems.map(prev=>{
                        return(
                            <ListItem
                           button
                            key={prev.text}
                            onClick={()=>{history.push(prev.path)}}
                            className= {location.pathname == prev.path ? MyStyles.active : null}
                            >
                                <ListItemIcon>{prev.icon}</ListItemIcon>
                                <ListItemText>{prev.text}</ListItemText>
                            </ListItem>
                            
                        )
                    })
                }
            </List>
         
        
        </Drawer>
        <div
        className={MyStyles.children}
        >
        {children}
        </div>
      
    </div>
  )
}

export default Layout
