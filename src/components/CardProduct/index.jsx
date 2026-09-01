import "./CardProduct.css"
const CardProduct = () => {
  return (
      <div className="productCard">
            <div className="imageContainer"><img src="" alt="" /></div>

            <div className="productInfo">
                <h4>Nome do produto</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                <div className="btnContainer">
                    <button className="btnCart">Adicionar ao carrinho</button>
                </div>
            </div>         
        </div>
  )
}

export default CardProduct
