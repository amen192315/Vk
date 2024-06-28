import React from 'react'
import { Avatar, Box, Card } from '@mui/material'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from '@mui/material'
import { QuestionAnswer } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { menu } from './dataMenu'

const Menu = () => {
  const history = useNavigate();
  return (
    <div>
    <Card sx={{
        variant:'outlined',
        padding:2,
        backgroundColor:'#F6F6F6',
        marginTop:5,
        marginBottom:10
      }}>
      <List>
        {menu.map((item) => (
        <ListItem key={item.title} disablePadding>
            <ListItemButton onClick={() => history(item.link)}>
                <ListItemIcon sx={{
                  minWidth:36
                }}>
                    <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.title}/>
            </ListItemButton>
        </ListItem>
        ))}
      </List>
      </Card>
    </div>
  )
}

export default Menu
