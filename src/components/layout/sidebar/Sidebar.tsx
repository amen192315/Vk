import React, { FC } from 'react'
import { Box } from '@mui/material'
import {Link} from 'react-router-dom'
import UserItems from './UserItems'

const Sidebar:FC = () => {
  return (
    <div>
      <UserItems />
    </div>
  )
}

export default Sidebar
