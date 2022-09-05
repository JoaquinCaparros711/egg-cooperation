import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const Inicio = () => {
  return (
    <>

      <div className="wrap">
        <div className="wrap-texto">
          <h1>Restaurante</h1>
        </div>
      </div>

      <div className="container">
        <h2>NOS ESPECIALIZAMOS EN REGALARTE UNA EXPERIENCIA <b>ÚNICA EN EL MUNDO</b></h2>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              First in DOM, no order applied
            </div>
            <div className="col order-5">
              Second in DOM, with a larger order
            </div>
            <div className="col order-1">
              Third in DOM, with an order of 1
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
