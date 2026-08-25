import IconPng from"../../assets/selo.png"
import map from "../../assets/map.png"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
        <div className="containerCard">
            <img src={IconPng} alt="" className="iconFooter" />
        </div>

        <div className="social">
            <h3>Nossas redes</h3>
            <div className="socialMedia">
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>X</li>
                </ul>
            </div>

        </div>

        <div className="location">
            <img src={map} alt="" className="map"/>
        </div>
    </footer>
  )
}

export default Footer
