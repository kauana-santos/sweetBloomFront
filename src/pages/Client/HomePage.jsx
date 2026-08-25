import Header from "../../components/Header/Header"
import LogoPrincipal from "../../assets/LogoPrincipal.png"
import "./HomePage.css"
import Divider from "../../components/Divider/Divider"
import Footer from "../../components/Footer/Footer"
import Products from "../../components/Products/Products"

const HomePage = () => {
  return (
    <>
    <Header/>
    <section className="hero">
        <div className="containerLogo">
            <img src={LogoPrincipal} alt="logo principal"  className="imgPrincipal"/>
            <p className="texto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        </div>
    </section>
    <Divider/>
    <Products/>

    <Footer/>
    </>
  )
}

export default HomePage
