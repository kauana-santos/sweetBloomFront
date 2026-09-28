import "./Divider.css"
import { MdOutlineDeliveryDining } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { GiCupcake } from "react-icons/gi";

const Divider = () => {
  return (
    
    <section className="beneficios">
      <div className="beneficios-container">

        <div className="beneficio">
          <MdOutlineDeliveryDining className="icone" />

            <p>
              Entregas em toda<br />
              grande São Paulo
            </p>
        </div>

        <div className="beneficio">
          <BiSupport className="icone"/>
          <p>Suporte 24 horas</p>
        </div>

        <div className="beneficio">
          <GiCupcake className="icone"/>
          <p>Doces para encomendas</p>
        </div>

      </div>
      
    </section>
  )
}

export default Divider
