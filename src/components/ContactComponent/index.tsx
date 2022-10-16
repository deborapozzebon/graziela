import styles from './styles.module.scss'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { useState } from 'react';

export default function ContactComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value)
        break;
      case 'email':
        setEmail(event.target.value)
        break;
      case 'cellphone':
        setCellphone(event.target.value)
        break;
      case 'message':
        setMessage(event.target.value)
        break;
    }
  };
  
  return (
    <>
      <div className={styles.both}>
        <div className={styles.left}>
          <span>Sinta-se à vontade para</span>
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
          <button><a href="https://api.whatsapp.com/send?phone=54991119962">Entre em contato</a></button>
        </div>
        <div className={styles.right}>
          <form className={styles.form}>
            <div className={styles.name}>
              <label htmlFor="name">Nome completo</label>
              <input type="text" name="name" id="name" placeholder="Antonia Silva" onChange={handleChange} value={name}/>
            </div>
            <div className={styles.email}>
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email" placeholder="email@email.com" onChange={handleChange} value={email}/>
            </div>
            <div className={styles.cellphone}>
              <label htmlFor="cellphone">Celular</label>
              <input type="tel" name="cellphone" id="cellphone" placeholder="(00) 00000-0000" onChange={handleChange} value={cellphone}/>
            </div>
            <div className={styles.message}>
              <label htmlFor="message">Como posso te ajudar?</label>
              <input type="text" name="message" id="message" onChange={handleChange} value={message}/>
            </div>
            <button type="submit">
              <a href={`mailto:grazielamatana@gmail.com?subject=Contato de: `+ name + ` com email: `+ email + ` e telefone: `+ cellphone + `&body=` + message}>
                Enviar
              </a>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}