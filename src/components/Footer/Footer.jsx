import IconPng from"../../assets/selo.png"
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

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
                    <li><FaFacebookSquare className="iconeFooter"/></li>
                    <li><FaSquareInstagram className="iconeFooter"/></li>
                    <li><FaSquareXTwitter className="iconeFooter"/></li>
                </ul>
            </div>

        </div>

        <div className="location">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d407100.5705523071!2d-46.966033835409995!3d-23.625466982809098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e1!3m2!1spt-BR!2sbr!4v1789492286803!5m2!1spt-BR!2sbr"
                width="390"
                height="170"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </footer>
  )
}

export default Footer
