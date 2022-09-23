import { ServiceGrid } from '../../interfaces/GeneralInterfaces'
import styles from './styles.module.scss'

export default function ServiceGridComponent({title, children}: ServiceGrid) {
  return (
    <div className={styles.serviceGridItem}>
      <div className={styles.contentService}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  )
}