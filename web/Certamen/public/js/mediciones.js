const iniciarEliminacion = async function() {
    let id = this.idMedi;
    let resp = await Swal.fire({title:"¿Estas seguro?", text:"Esta operación es irreversible"
    , icon:"error",showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarMedicion(id)){
            let mediciones = await getMediciones();
            cargarTabla(mediciones);
            Swal.fire("Medicion Eliminada","Medicion eliminada exitosamente","info");
        }else{
            Swal.fire("Error","No se puede atender la solucitud","error");
        }
    }else{
        Swal.fire("Cancelado","Cancelado a peticion del usuario","info");
    }
};


const cargarTabla = (mediciones)=>{
    let tbody = document.querySelector("#tbody-mediciones");
    tbody.innerHTML = "";
    for(let i=0;i<mediciones.length;++i){
        let tr = document.createElement("tr");
        //Fecha Hora Medidor Valor Acciones
        //En valor poner icono dependiendo de el tipo
        //Boton eliminar
        let tdFecha = document.createElement("td");
        tdFecha.innerText = mediciones[i].fecha;
        let tdHora = document.createElement("td");
        tdHora.innerText = mediciones[i].hora;
        let tdMedidor = document.createElement("td");
        tdMedidor.innerText =mediciones[i].medidor;
        let tdValor = document.createElement("td");
        let icono = document.createElement("i");
        let medida = mediciones[i].medida;
        if(medida==0){
            tdValor.innerText = mediciones[i].valor+"[kW]";
        }else if(medida==1){
            tdValor.innerText = mediciones[i].valor+"[W]";
        }else{
            tdValor.innerText = mediciones[i].valor+"[C]";
            if(mediciones[i].valor>60){
                icono.classList.add("fas","fa-solid","fa-fire-flame-curved","text-danger","fa-3x");
                tdValor.appendChild(icono);
            }
        }
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText= "Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idMedi = mediciones[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);
        tr.appendChild(tdFecha);
        tr.appendChild(tdHora);
        tr.appendChild(tdMedidor);
        tr.appendChild(tdValor);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
};
document.addEventListener("DOMContentLoaded",async ()=>{
    let mediciones = await getMediciones();
    cargarTabla(mediciones);
});