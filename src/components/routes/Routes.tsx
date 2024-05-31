import React, { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './list'
import Layout from '../layout/Layout'

const Routess:FC = () => {
    const isAuth = true

  return (
    <div>
      <Router>
        <Routes>
            {routes.map((route) => {
                if(route.auth && !isAuth){
                    return false
                }
                return (
                    <Route path={route.path} element = {(
                        <Layout>
                            <route.component />
                        </Layout>
                    )} key={`route ${route.path}`}>
                        
                    </Route>
                )
            })}
        </Routes>
      </Router>
    </div>
  )
}

export default Routess
