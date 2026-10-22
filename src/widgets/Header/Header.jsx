import React from 'react'
import style from './Header.module.scss'
export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <h2 className={style.title}>SHOP.CO</h2>
      </div>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li className={style.item}>Shop</li>
          <li className={style.item}>On Sale</li>
          <li className={style.item}>New Arrivals</li>
          <li className={style.item}>Brands</li>
        </ul>
      </nav>
    </header>
  )
}

