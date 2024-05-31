import React from 'react'
import { Avatar, Box, Card } from '@mui/material'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from '@mui/material'
import { QuestionAnswer } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Menu = () => {
  const history = useNavigate();
  return (
    <div>
    <Card sx={{
        variant:'outlined',
        padding:2,
        backgroundColor:'#F6F6F6'
      }}>
      <List>
        <ListItem disablePadding>
            <ListItemButton onClick={() => history('/messages')}>
                <ListItemIcon>
                    <QuestionAnswer />
                </ListItemIcon>
                <ListItemText primary="Inbox"/>
            </ListItemButton>
        </ListItem>
      </List>
      </Card>
    </div>
  )
}

export default Menu
