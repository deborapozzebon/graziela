import styles from './styles.module.scss'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

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
            <p><a>Blog</a></p>
            <p><a href='#contact'>Contato</a></p>
            <p><a>Termos de Uso</a></p>
            <p><a>Política de Privacidade</a></p>
          </div>
        </div>
        <div className={styles.contact}>
          <span>sinta-se a vontade para</span>
          <h4>entrar em contato</h4>
          <p><a href="https://api.whatsapp.com/send?phone=54991119962">(54) 99111-9962</a></p>
          <p><a href="mailto:ola@grazielamatanaadvocacia.com.br">grazielamatana@gmail.com</a></p>
          <button><a href="https://api.whatsapp.com/send?phone=54991119962">Me chama!</a></button>
        </div>
      </div>
      <p className={styles.rights}>Todos os direitos reservados Graziela Matana © 2022</p>
    </footer>
  )
}