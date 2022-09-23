import { ColorRing } from 'react-loader-spinner'
import styles from './styles.module.scss'

export default function SpinnerComponent() {
  return (
    <div className={styles.spinner}>
      <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#ffffff', '#518C80', '#FCF5EB', '#CC6F84', '#80b1a7']}
      />
    </div>
  )
}