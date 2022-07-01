import React from 'react'
import Navbar from '@components/Navbar'

import styles from './style.module.css'
import Footer from '@components/Footer'

const Layout = ({ children }) => {

  return (
    <div>
      <Navbar />
      <main className='container vh-100 text-center padding-section'>
        {children}
      </main>
      <Footer />
    </div>

  )
}

export default Layout