import Table from "../../components/Table"
import Logo from "../../assets/logo.png"
import "./Admin.css"


const admin = () => {
  return (
    <section className="adminSection">
      <header>
        <div className="logoContainer">
          <img src={Logo} alt="SweetBloom" />
        </div>
      </header>

      <main className="mainContent">
        <div className="title">
          <h1>Produtos cadastrados</h1>
          <button className="btnProduct">Novo produto</button>
        </div>

        <div className="tableContainer">
          <div className="filterContainer"> <input type="text" placeholder="Filtrar" className="inputFiltrar"/></div>
          <div className="table">
            <Table/>
          </div>
        </div>
      </main>
    </section>
  )
}

export default admin
