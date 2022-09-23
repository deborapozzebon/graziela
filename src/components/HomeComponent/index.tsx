import styles from './styles.module.scss'

export default function HomeComponent() {
  return (
    <>
    <div className={styles.homeContent}>
      <div className={styles.left}>
        <h1>Graziela Matana <br/>Advocacia Contratual</h1>
        <span>OAB/RS 118.362</span>
        <span>Unindo contratos e design para uma advocacia objetiva e eficiente </span>
      </div>
      <div className={styles.right}>
        <div className={styles['first-image']} />
      </div>
    </div>
    </>
  )
}