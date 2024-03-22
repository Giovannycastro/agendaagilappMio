import { useState } from "react"


export function Formulario(){

    const[verCedula,modificarCedula]=useState("")
    const[verContraseña,modificarContraseña]=useState("")

    function procesarFormulario(){
        
    }
    return(
        <>
            <section className="container" >
                <div className="row justify-content-center text-center">
                   
                <div className="col-12 col-md-8">
                        <img src="../../src/assets/sura_seguros_salud_girardot.png" alt=""className="img-fluid" />
                        <form className="border rounded p-4">
                            <h2>CONTROLA TU SALUD </h2>
                            <div class="input-group mb-3 mt-5">
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-vcard-fill"></i></span>
                                <input
                                  type="text" 
                                  class="form-control" 
                                  placeholder="Numero Cedula"
                                  ID="Identificación"
                                  />
                            </div>
                            <div class="input-group mb-3 mt-5">
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-file-lock2-fill"></i></span>
                                <input 
                                 type="text" 
                                 class="form-control" 
                                 placeholder="Contraseña"
                                 ID="Contraseña"
                                 />
                            </div>
                            <button type="submit" className="btn btn-primary">Ingresar</button>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}