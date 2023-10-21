import Style from '../Css/Home.module.css'
import Circulos from '../img/Circleend1.png'
import Play from '../img/playstore.png'
import Ios from '../img/ios.png'
import CardB1 from '../img/CardB1.png'
import CardB2 from '../img/CardB2.png'
import CardB3 from '../img/CardB3.png'
import CardB4 from '../img/CardB4.png'
import Cartao1 from '../img/Cartao1.png'
import Cartao2 from '../img/Cartao2.png'
import Cartao3 from '../img/Cartão3.png'
import IA from '../img/IAmulher.png'
import Parce1 from '../img/parceiro1.png'
import Parce2 from '../img/parceiro2.png'
import Parce3 from '../img/parceiro3.png'
import Parce4 from '../img/parceiro4.png'
import Parce5 from '../img/parceiro5.png'
import Parce6 from '../img/parceiro6.png'
import Logof from '../img/iconlogo.png'
import React, { useState } from 'react';





function Home(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      // Função para lidar com mudanças nos campos do formulário
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      // Função para lidar com o envio do formulário
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para processar o formulário, como enviar o conteúdo para um servidor ou tratá-lo de acordo com suas necessidades.
    
        // Exemplo de saída dos dados do formulário
        console.log('Dados do formulário:', formData);
    
        // Limpe o formulário após o envio
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      };

    return(
        <article>
            <section className={Style.Banner}>
                  
                <div className={Style.Bigfrase}> 
                <p className={Style.Sublinha}> Ella Bank: Liberte seu potencial, conquiste sua independência financeira </p>
                <button> Baixe o App</button>
                <br></br>
                <div className={Style.Iconplays}>
                <img src={Play} alt=""/> 
                <img  src={Ios} alt=""/>
                </div>
                </div>

                <div className={Style.Bannercircle}> 
                    <img src={Circulos} alt="" />
                </div>

            </section>

            <section className={Style.Beneficios}>
                <img src={CardB1} alt="" />
                <img src={CardB2} alt="" />
                <img src={CardB3} alt="" />
                <img src={CardB4} alt="" />
              
            </section>

            <h3> "Ella Bank, o banco que se adapta as suas necessidades"</h3>

            <section className={Style.Cartoes}>

                <div className={Style.Cartoesarea}> 
                    <img src={Cartao1} alt="" />
                </div>

                <div className={Style.Textcartao}> 
                <h4> Liberty </h4>
                <p className={Style.Textinho}> Com o Cartão Liberty, você tem a facilidade de usar tanto o crédito quanto o débito, adaptando-se às suas necessidades financeiras. É a escolha ideal para quem busca autonomia e uma experiência bancária feita sob medida.</p>
                <h6> Saiba mais </h6>
                </div>

                <div className={Style.Textcartao}> 
                <h4> Power </h4>
                <p className={Style.Textinho}>  Este é o seu cartão empresarial que oferece suporte para o crescimento do seu empreendimento. Com acesso exclusivo a crédito e empréstimos, capacitando você a alcançar seus objetivos empresariais e prosperar. Seu parceiro no desenvolvimento de um negócio de sucesso </p>
                <h6> Saiba mais </h6>
                </div>

                <div className={Style.Cartoesarea}> 
                    <img src={Cartao2} alt="" />
                </div>

                <div className={Style.Cartoesarea}> 
                    <img src={Cartao3} alt="" />
                </div>

                <div className={Style.Textcartao}> 
                <h4> Glamour </h4>
                <p className={Style.Textinho}> O Cartão Glamour é mais do que um cartão, é um passaporte para um mundo de vantagens. Com recompensas, cashback, e descontos em parceiros. Além do acesso a taxas de câmbio avançadas e recargas, torna-o simplesmente ideal para viagens.  </p>
                <h6> Saiba mais </h6>
                </div>
            </section>

            <section className={Style.IA} >
              <div className={Style.ImagemIA}>
              <img src={IA} alt="" />
              </div>

              <div className={Style.TextoIA}>
                <h3> Ella, sua Assistente Pessoal </h3>
                <p> O Chatbot Assistente Financeiro do nosso banco digital é um aliado inovador que veio para transformar a relação das mulheres com suas finanças. Esta assistente inteligente foi projetado com base nas suas necessidades, objetivos e desafios financeiros específicos </p>
               
              </div>

            </section>

            <section className={Style.Email}>
            
                <h5> Precisa de Ajuda? entre em contato </h5>
            

            
                 <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="email">E-mail:  </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message"></label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
        
      </section>



            <section className={Style.Parceiros}>
            <h3> Futuros Parceiros </h3>

            <div className={Style.ImgParceiros}>
              <img src={Parce1}  alt="" />
              <img src={Parce6}  alt="" />
              <img src={Parce3}  alt="" />
              <img src={Parce4}  alt="" />
              <img src={Parce5}  alt="" />
              <img src={Parce2}  alt="" />
            </div>
              
            </section>
            
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
            

        </article>
       
        

    );
}

export default Home 