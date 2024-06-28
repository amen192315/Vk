import React, { FC } from 'react';
import { Avatar, Box, Card } from '@mui/material';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { QuestionAnswer } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { users } from './dataUser';

const UserItems: FC = () => {
  const history = useNavigate();
  return (
    <div>
      <Card
        sx={{
          variant: 'outlined',
          padding: 2,
          backgroundColor: '#F6F6F6',
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            marginLeft: '10px',
          }}
        >
          {users.map((user) => (
            <Link
              key={user._id}
              to={`/profile/${user._id}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: '#111',
                marginBottom: 4,
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  marginRight: 3,
                  overflow: 'hidden',
                  width: 50,
                  height: 50,
                }}
              >
                <Avatar
                  src={user.avatar}
                  alt=""
                  sx={{ width: 48, height: 48, borderRadius: '50%' }}
                />
                {user.isInNetwork && (
                  <Box
                    sx={{
                      backgroundColor: '#4fb14f',
                      border: '2px solid white',
                      width: 13,
                      height: 13,
                      position: 'absolute',
                      bottom: 2,
                      right: 2,
                      borderRadius: '50%',
                    }}
                  ></Box>
                )}
              </Box>
              <span style={{ fontSize: 14 }}>{user.name}</span>
            </Link>
          ))}
        </Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => history('/messages')}>
              <ListItemIcon>
                <QuestionAnswer />
              </ListItemIcon>
              <ListItemText primary="Сообщения" />
            </ListItemButton>
          </ListItem>
        </List>
      </Card>
    </div>
  );
};

export default UserItems;
