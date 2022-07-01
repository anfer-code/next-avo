import React from 'react'
import Link from 'next/link'

import styles from './style.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <menu className='container flexer'>
        <Link href='/'>
          <a>Home</a>
        </Link>

        <Link href='/car'>
          <a>Tiendita</a>
        </Link>
      </menu>
    </nav>
  )
}

export default Navbar