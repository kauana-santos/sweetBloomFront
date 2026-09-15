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
    <div className="divider-svg">
        <svg width="2040" height="100" viewBox="0 0 2040 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0V60C18.36 60 36.72 57 51 50C77.52 36 124.44 36 153 50C181.56 64 226.44 64 255 50C281.52 36 328.44 36 357 50C385.56 64 430.44 64 459 50C485.52 36 532.44 36 561 50C589.56 64 634.44 64 663 50C689.52 36 736.44 36 765 50C793.56 64 838.44 64 867 50C893.52 36 940.44 36 969 50C997.56 64 1042.44 64 1071 50C1097.52 36 1144.44 36 1173 50C1201.56 64 1246.44 64 1275 50C1301.52 36 1348.44 36 1377 50C1405.56 64 1450.44 64 1479 50C1505.52 36 1552.44 36 1581 50C1609.56 64 1654.44 64 1683 50C1709.52 36 1756.44 36 1785 50C1813.56 64 1860.48 63 1887 50C1915.56 36 1962.48 36 1989 50C2003.28 57 2021.64 60 2040 60V0H0Z" fill="#503B31"/>
        </svg>
    </div>
    <Products/>

    <Footer/>
    </>
  )
}

export default HomePage
