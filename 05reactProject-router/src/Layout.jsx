import React from 'react'
import Header from './components/Header/header' // Fix the file name in the import statement

import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
                <Header />
                <Outlet />
                <Footer />
        </>
    )
}

export default Layout