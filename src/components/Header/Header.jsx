import "./Header.css"
import ImgIcon from "../../assets/logoIcon.png"

const Header = () => {
  return (
    <header>
        <div className="ContainerLogo"><img src={ImgIcon} alt="logo"/></div>
        <nav className="navigation">
            <ul>
              <li>Home</li>
              <li>Produtos</li>
              <li>Contato</li>
              <li>🚗</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;
