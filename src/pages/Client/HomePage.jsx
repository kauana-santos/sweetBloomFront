import Header from "../../components/Header/Header"
import LogoPrincipal from "../../assets/LogoPrincipal.png"
import "./HomePage.css"
import Divider from "../../components/Divider/Divider"

const HomePage = () => {
  return (
    <>
    <Header/>
    <section className="hero">
        <div className="containerLogo">
            <img src={LogoPrincipal} alt="logo principal"  className="imgPrincipal"/>
            <p className="texto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit labore quibusdam quis maiores autem veniam, possimus voluptate repellendus repudiandae similique nemo? Dolorum nostrum natus unde dolores in temporibus assumenda veritatis?</p>
        </div>
    </section>
    <Divider/>
    </>
  )
}

export default HomePage
