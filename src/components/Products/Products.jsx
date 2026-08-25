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
                <div className="productCard">
                    <img src="" alt="" />

                    <h4>Nome do produto</h4>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                    <div>
                        <button className="btnCart">Adicionar ao carrinho</button>
                    </div>
                </div>
            </section>
        </div>
    </section>
  )
}

export default Products
