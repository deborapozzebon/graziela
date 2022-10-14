import styles from './styles.module.scss'

export default function PrivacyPolicyComponent() {
  return (
    <>
    <div className={styles.privacyContent}>
      <h1 className={styles.title}>Política de Privacidade</h1>
      <span className={styles.update}>Última atualização em: 29/09/2022</span>
      <span className={styles.welcome}>Olá! Seja bem-vindo(a)!</span>
      <span className={styles.myTerms}>Essas são as políticas de privacidade!</span>
      {/* <span>Saiba que estou sempre disponível para tirar qualquer dúvida que você tenha pelo <a href="mailto:ola@grazielamatanaadvocacia.com.br">grazielamatana@gmail.com</a>, pelo canal <a href="contact">entre em contato</a> disponível no site e pelo telefone <a href="https://api.whatsapp.com/send?phone=54991119962">(54) 99111-9962.</a></span> */}
      <div className={styles.allTerms}>     
        <h2 className={styles.subtitle}>POLÍTICA DE PRIVACIDADE: /////////ALTERAR</h2>
        <span className={styles.term}><b>1)</b> Nenhum serviço jurídico é prestado neste site.</span>
        <span className={styles.term}><b>2)</b> Sou advogada especializada em direito societário e também falo de contratos e legal design. Aqui apenas divulgo informações que acredito ser importante e também uso o site como um canal de comunicação com pessoas interessadas no meu trabalho.</span>
        <span className={styles.term}><b>3)</b> Você não precisa pagar nada para usar o este site e usufruir do conteúdo que está aqui.</span>
        <span className={styles.term}><b>4)</b> O termo Usuário que tratamos aqui refere-se a qualquer pessoa que esteja navegando no site. </span>
        <span className={styles.term}><b>5)</b> Eu escrevo todos os artigos e materiais disponibilizados para ajudá-los, porém, não permito que você utilize esse material para qualquer outra finalidade que não seja aprender, ok? Caso tenha interesse em divulgar meus textos, entre em contato para que eu autorize expressamente.</span>
        <span className={styles.term}><b>6)</b> Tomei todas as medidas para que este site seja o mais seguro possível, mas mesmo assim recomendo que, antes de baixar qualquer conteúdo, você instale antivírus e programas de proteção.</span>
        <span className={styles.term}><b>7)</b> Os Termos de Uso poderão sofrer atualizações, as quais estarão disponíveis no site. Além disso, se eu realizar alguma ação que a lei exija sua autorização, você receberá um aviso antes para poder aceitar ou recusar.</span>
        <span className={styles.term}><b>8)</b> A titularidade e os direitos relativos ao site pertencem exclusivamente à Graziela Matana. O acesso e a utilização do site e dos conteúdos nele presentes não lhe confere qualquer direito ou prerrogativa sobre propriedade intelectual.</span>
        <span className={styles.term}><b>9)</b> Você já sabe, mas vale lembrar que todo o conteúdo do site, incluindo artigos, e-books, newsletters, programas, bases de dados, arquivos, textos, imagens, layouts, cabeçalhos, domínios e demais elementos, foram criados, desenvolvido ou cedidos ao controlador do site, sendo, portanto, de propriedade exclusiva GRAZIELA MATANA ADVOCACIA ou a ela licenciado e encontra-se protegido pelas leis brasileiras e tratados internacionais que versam sobre direitos de propriedade intelectual, em especial a Lei n. 9.610/98 (Lei de Direitos Autorais).</span>
        <span className={styles.term}><b>10)</b> O Usuário que violar as proibições contidas na legislação sobre propriedade intelectual e nestes Termos será responsabilizado, civil e criminalmente, pelas infrações cometidas, além de poder ser impedido de acessar o site.</span>
        <span className={styles.term}><b>11)</b> Você concorda que a legislação aplicável para fins destes Termos de Uso e das Políticas de Privacidade será a vigente na República Federativa do Brasil e, também que o foro da cidade Caxias do Sul, Rio Grande do Sul, Brasil, será o único competente para dirimir qualquer questão ou controvérsia oriunda ou resultante do uso do site.</span>
        </div>
    </div>
    </>
  )
}