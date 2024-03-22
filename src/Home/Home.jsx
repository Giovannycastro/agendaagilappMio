import"./Home.css"
import { inventario } from "../utils/medicamentos"
export function Home(){
    //zona manipulación de datos
    let nombrePaciente="Giovanny Castro"
    let sedePaciente="Suramericana"
    console.log(inventario)
    //los arreglo los puedo manipular
    //para controlar que información voy a presentar

    //1.funcion de filtrado de datos
    //condicion de filtrado (pregunta(si/no))
    let resultado=inventario.filter(function(auxiliar){
        return(auxiliar.nombre=="acetaminofen")
    })
    console.log(resultado)
    return(//zona de renderizado
        <>
           <section className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h3 className="fuente">servicios a un clic</h3>
                    <h2 className="text-muted">HOLA <span className="fuente">{nombrePaciente}</span></h2>
                    <p>Realiza facilmente tus procesos con EPS SURA ! Conoce aqui las soluciones virtuales que tenemos especialmente para ti¡.</p>

                </div>
                <div className="col-12 col-md-6">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Tu grupo familiar</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <hr />
                    <div className="row">
                        <div className="col-12 col-md-2 mt-4">
                        <i class="bi bi-person-raised-hand fs-1 fuente"></i>
                        </div>
                        <div className="col-12 col-md-10 mt-3">
                            <br />
                            <h4> MEDICO DE FAMILIA </h4>
                            <h8>Dr Miguel Restrepo Toriyama</h8>
                            
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 col-md-2 mt-4">
                        <i class="bi bi-person-badge fs-1 fuente"></i>
                        </div>
                        <div className="col-12 col-md-10 mt-3">
                            <br />
                            <h4>TIPO AFILIADO</h4>
                            <h8>Beneficiario</h8>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 col-md-2 mt-4">
                         <i class="bi bi-bag-dash-fill fs-1 fuente"></i>
                        </div>
                        <div className="col-12 col-md-10 mt-3">
                            <br />
                            <h4>ESTADO AFILIACIÓN</h4>
                            <h8>Cobertura integral</h8>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 col-md-2 mt-4">
                        <i class="bi bi-hospital-fill fs-1 fuente"></i>
                        </div>
                        <div className="col-12 col-md-10 mt-3">
                        
                            <br />
                            <h4>IPS ACTUAL</h4>
                            <h8>Almacentro</h8>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
           </section>
        </>
    )
}