import React from 'react'
import logoImg from '@/assets/logo.png'
import Link from 'next/link'
import styles from './main-header.module.css'

function MainHeader() {
  return (
    <header>
      <Link
        className={styles.logo}
        href='/'>
        <img
          src={logoImg.src}
          alt='A plate with food on it'
        />
        Next Level Food
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/meals'>Browse Meals</Link>
          </li>
          <li>
            <Link href='/community'>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
