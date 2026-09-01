import CardProduct from "../CardProduct"
import "./Products.css"
const Products = () => {
  return (
    <section className="products">
        <div className="titleContainer">
            <h3>Nossos produtos</h3>
        </div>

        <div className="containerProducts">
            <div className="filterContainerProduct">
                <input type="text"  placeholder="filtrar" />
            </div>

            <section className="cardsContainer">
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
            </section>
        </div>
    </section>
  )
}

export default Products
