import Style from '../Css/Header.module.css'
import Logo from '../img/iconlogo.png'

function Header(){
    return(
        <header>
            <div className={Style.Logo}>
                <img src={Logo} alt="" />
            </div>

            <nav>
               <ul>
                 <li> Home </li>
                 <li> Sobre Nós </li>
                 <li> Ajuda </li>

                 <button> Login </button>
                 <button> Cadastre-se </button>
               </ul>
            </nav>

        </header>

    );
}

export default Header