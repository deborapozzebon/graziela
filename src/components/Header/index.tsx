import styles from './styles.module.scss'
import Link from 'next/link'
import { useState } from 'react';

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <nav className={styles.sticky}>
        <div className={styles.header}>
          <Link href="/#home">
            <img src='./favicon.png' alt='Símbolo Graziela Matana' />
          </Link>
          <ul className={`menu ${isMenuOpen ? styles.active : ''}`}>
            <li>
              <Link href="/#home">
                <a onClick={closeMenu}>Início</a>
              </Link>
            </li>
            <li>
              <Link href="/#about">
                <a onClick={closeMenu}>Sobre mim</a>
              </Link>
            </li>
            <li>
              <Link href="/#services">
                <a onClick={closeMenu}>Serviços</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a onClick={closeMenu}>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/#contact">
                <a onClick={closeMenu}>Contato</a>
              </Link>
            </li>
          </ul>
          <div className={styles.btn_menu} onClick={handleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg>
          </div>
        </div>
      </nav>
    </>
  )
}

