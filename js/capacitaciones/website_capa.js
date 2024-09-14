var containercapa = document.getElementById("containercapa");





function generarCapa(capa) {
    return `   <div>
                    <div class="card">
                            <img  style="width:100%" 
                            src=${capa.image}>
                            
                            <div class="card-container">
                                <div  style="padding-bottom: 50px;" class="john">
                                    <h4>
                                 ${capa.titulo}  
                                    </h4>
                                </div>
                                <div class="john">
                                    <p>
                                       ${capa.tipo_insignia}  
                                    </p>
                                </div>
    
                            </div>
                            <div class="cardbtn">
                                <button class="btncard" >Ver curso</button>
                            </div>
                    </div>
             </div>`
  }


  function renderizarcapa(array) {
    containercapa.innerHTML = ""
    array.forEach(item =>
        containercapa.innerHTML += generarCapa(item)
    )
  }
  
  renderizarcapa(capacitacion)