import styles from './styles.module.scss'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.principal}> 
        <div className={styles.social}>
          <img src='/logo2.JPG' alt='Logo Graziela Matana advocacia contratual' />
          <span>Me acompanhe nas redes sociais</span>
          <div className={styles.buttons}>
            <a href='https://www.instagram.com/grazielamatana/' rel="noreferrer" target='_blank'>
              <AiFillInstagram color='#FFFFFF' />
            </a>
            <a href='https://www.linkedin.com/in/graziela-matana-bb347b1b5/' rel="noreferrer" target='_blank'>
              <AiFillLinkedin color='#FFFFFF' />
            </a>
          </div>
        </div>
        <div className={styles.menus}>
          <div className={styles.links}>
            <p><Link href='blog'>Blog</Link></p>
            <p><Link href='/#contato'>Contato</Link></p>
            <p><Link href='/legal/termos-de-uso'>Termos de Uso</Link></p>
            <p><Link href='/legal/politica-de-privacidade'>Política de Privacidade</Link></p>
          </div>
        </div>
        <div className={styles.contact}>
          <span>Sinta-se à vontade para</span>
          <h4>entrar em contato</h4>
          <p><a href="https://api.whatsapp.com/send?phone=54991119962">(54) 99111-9962</a></p>
          <p><a href="mailto:ola@grazielamatanaadvocacia.com.br">grazielamatana@gmail.com</a></p>
          <button><a href="https://api.whatsapp.com/send?phone=54991119962">Entre em contato</a></button>
        </div>
      </div>
      <p className={styles.rights}>Todos os direitos reservados Graziela Matana © 2022</p>
    </footer>
  )
}