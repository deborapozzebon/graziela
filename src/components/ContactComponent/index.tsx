import styles from './styles.module.scss'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

export default function ContactComponent() {
  return (
    <>
      <div className={styles.both}>
        <div className={styles.left}>
          <span>Sinta-se a vontade para</span>
          <h2>entrar em contato</h2>
          <p><a href="https://api.whatsapp.com/send?phone=54991119962">(54) 99111-9962</a></p>
          <p><a href="mailto:grazielamatana@gmail.com">grazielamatana@gmail.com</a></p>
          {/* <p>www.grazielamatanaadvocacia.com.br</p> */}
          <div className={styles.buttons}>
            <a href='https://www.instagram.com/grazielamatana/' rel="noreferrer" target='_blank'>
              <AiFillInstagram color='#FFFFFF' />
            </a>
            <a href='https://www.linkedin.com/in/graziela-matana-bb347b1b5/' rel="noreferrer" target='_blank'>
              <AiFillLinkedin color='#FFFFFF' />
            </a>
          </div>
          <button><a href="https://api.whatsapp.com/send?phone=54991119962">Me chama!</a></button>
        </div>
        <div className={styles.right}>
          <form className={styles.form}>
            <div className={styles.name}>
              <label htmlFor="name">Nome completo</label>
              <input type="text" name="name" id="name" placeholder="Antonia Silva"/>
            </div>
            <div className={styles.email}>
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email" placeholder="email@email.com"/>
            </div>
            <div className={styles.cellphone}>
              <label htmlFor="cellphone">Celular</label>
              <input type="number" name="cellphone" id="cellphone" placeholder="(00) 00000-0000"/>
            </div>
            <div className={styles.message}>
              <label htmlFor="message">Como posso te ajudar?</label>
              <input type="text" name="message" id="message"/>
            </div>
            <button type="submit">Enviar</button>
          </form>
          {/* <img src='/contact.png' alt="Logo Graziela Matana advocacia contratual" /> */}
        </div>
      </div>
    </>
  )
}