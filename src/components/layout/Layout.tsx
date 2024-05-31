import React, {FC,PropsWithChildren} from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import { Grid } from '@mui/material'

interface HeaderProps {
    children: any;
  }
  
const Layout:React.FC<PropsWithChildren<HeaderProps>> = ({children}) => {
  return (
    <>
      <Header />
      <Grid container spacing={2} marginX={5} marginTop={2}>
      <Grid item md={2}>
        <Sidebar />
      </Grid>
      <Grid item md={10}>
        {children}
      </Grid>
      </Grid>
    </>
  )
}

export default Layout
