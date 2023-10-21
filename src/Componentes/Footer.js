import Style from '../Css/Footer.module.css'
import Logof from '../img/iconlogo.png'


function Footer(){
    return(
    <footer> 
        <div className={Style.Logofooter}>
        <img src={Logof}  alt="" />
        
        <div className={Style.Icons}>
            

        </div>
        </div>
        
        <div className={Style.Atendimentofooter}>
            <h6> Atendimento </h6>
            <h5> Central de ajuda </h5>
            <h5> ellabank_atendimento@exemplo.com.br</h5>
            <h5> Perguntas frequentes</h5>
            <h5> Atendimento Acessivel </h5>
        </div>

        <div className={Style.Outrasinfo}>
        <h6> Informações </h6>
            <h5> Rua Tito 54, Lapa - SP </h5>
            <h5> ellabank@exemplo.com.br </h5>
            <h5> (00) 0000-0000 </h5>
            <h5> Atendimento Acessivel </h5>
        </div>

        <div className={Style.Produtos}>
        <h6> Produtos</h6>
            <h5> Conta Digital </h5>
            <h5> Conta Empresarial </h5>
            <h5> Conta internacional </h5>
            <h5> Educação financeira </h5>
        </div>
    
    </footer>

    );
}

export default Footer 