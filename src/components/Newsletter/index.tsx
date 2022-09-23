import { useState } from 'react';
import styles from './styles.module.scss'

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleChange = event => {
    setEmail(event.target.value)
  };

  const handleSubmit = event => {
    event.preventDefault()
    setEmail(event.target.value)
  }

  return (
    <section className={styles.newsletter + " container"}>
      <img src='/news.jpg' alt='mulher no computador' />
      <div className={styles.information}>
        <h3>Receba conteúdos semanais exclusivos sobre direito societário e legal design!</h3>
        <form onSubmit={handleSubmit}>
          <input placeholder='email@email.com' name='email' type='email' onChange={handleChange} value={email} />
          <button type='submit'>
            <a href={`mailto:grazielamatana@gmail.com?subject=Inscriva: `+ email + ` na sua newsletter`}>
              Quero receber!
            </a>
          </button>
        </form>
      </div>
    </section>
  )
}