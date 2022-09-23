import styles from './styles.module.scss'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

export default function AboutComponent() {
  return (
    <>
    <div className={styles.aboutContent}>
      <div className={styles.left}>
        <div className={styles['second-image']} />
        </div>
      <div className={styles.right}>
        <h2>Sobre mim</h2>
        <span><span className={styles.information}>Advogada</span>, <br/>especialista em direito societário pela Fundação Getúlio Vargas</span>
        <span className={styles.description}>Após trabalhar 6 anos na advocacia tradicional, descobri meu propósito na área: proporcionar clareza e acesso,  meu próprio estilo de trabalho elaborando contratos com linguagem clara e objetiva.</span>
        <span>Sem juridiquês e sem palavras difíceis para que todos entendam o que está sendo proposto e assim, trazer mais segurança jurídica para o seu negócio.</span>
        <div className={styles.buttons}>
          <a href='https://www.instagram.com/grazielamatana/' rel="noreferrer" target='_blank'>
            <AiFillInstagram color='#CC6F84' />
          </a>
          <a href='https://www.linkedin.com/in/graziela-matana-bb347b1b5/' rel="noreferrer" target='_blank'>
            <AiFillLinkedin color='#CC6F84' />
          </a>
        </div>
      </div>
    </div>
    </>
  )
}