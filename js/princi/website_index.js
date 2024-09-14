var indexcontainer = document.getElementById("indexcontainer");

function progra(progra) {
    return `<div class="hrsec">
                <div class="hrsec">
                    <div class="fecha">
                        <p>
                           ${progra.nombre_dia}
                        </p>
                        <p>
                        ${progra.dia}
                        </p>
                    </div>
                     <div class="detallehr">
                          <p>
                          Curso: ${progra.curso}
                          </p>
                          <p>
                           Hora:  ${progra.hora}
                          </p>
                          <p>
                          Clase:   ${progra.clase}
                          </p>
                      </div>
                </div>
            </div>`
  }

  function renderizarindex(array) {
    indexcontainer.innerHTML = ""
    array.forEach(item =>
        indexcontainer.innerHTML += progra(item)
    )
  }
  
  renderizarindex(programacion)
