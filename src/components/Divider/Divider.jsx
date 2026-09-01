import "./Divider.css"
import { MdOutlineDeliveryDining } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { GiCupcake } from "react-icons/gi";

const Divider = () => {
  return (
    
    <section className="beneficios">
      <div className="beneficios-container">

        <div className="beneficio">
          <MdOutlineDeliveryDining />


            <p>
              Entregas em toda<br />
              grande São Paulo
            </p>
        </div>

        <div className="beneficio">
          <BiSupport/>
          <p>Suporte 24 horas</p>
        </div>

        <div className="beneficio">
          <GiCupcake/>
          <p>Suporte 24 horas</p>
        </div>

      </div>
    </section>
  )
}

export default Divider
