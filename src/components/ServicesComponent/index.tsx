import ServiceGridComponent from '../ServiceGridComponent'
import styles from './styles.module.scss'

export default function ServicesComponent() {
  return (
    <div className={styles.service}>
      <h2>Serviços</h2>
      <span className={styles.subtitle}>Esses são os serviços prestados: </span>
      <div className={styles.grid}>
        <ServiceGridComponent title="Contratos">
        <span>Elaboração de contratos envolvendo compra e venda, locação e prestação de serviços</span>
        </ServiceGridComponent>
        <ServiceGridComponent title="Societário">
        <span>Abertura de empresas, alteração de contrato social e acordo de sócios</span>
        </ServiceGridComponent>
        <ServiceGridComponent title="Legal design">
        <span>Transformação e elaboração de contratos e documentos jurídicos utilizando legal design</span>
        </ServiceGridComponent>
      </div>
      <span className={styles.contact}>Ficou com alguma dúvida? <a className={styles.color} href="https://api.whatsapp.com/send?phone=54991119962"> Entre em contato! :)</a></span>
    </div>
  )
}