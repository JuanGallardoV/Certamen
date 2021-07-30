 const cargarMedi = async()=>{
    let mediciones = await getMedi();
    let medicionSelect = document.querySelector("#medi-select");
    mediciones.forEach(m=>{
        let option = document.createElement("option");
        option.value = m.id;
        option.innerText = m.nombre;
        medicionSelect.appendChild(option);
    });
    document.addEventListener("DOMContentLoaded",()=>{
        cargarMedi();
    });
};

document.querySelector("#registrar-btn").addEventListener("click",async ()=>{
    let fecha = document.querySelector("#fecha-txt").value.trim();
    let hora = document.querySelector("#hora-txt").value.trim();
    let medidor = document.querySelector("#medi-select").value.trim();
    let direccion = document.querySelector("#dir-txt").value.trim();
    let valor = +document.querySelector("#valor-txt").value.trim();
    let medida = document.querySelector("#tipo-select").value.trim();
    let errores = [];
    if(fecha===""){
        errores.push ("Debe ingresar una fecha");
    }
    if(hora===""){
        errores.push ("Debe ingresar una hora");
    }else if(hora.length!=5 || hora.charAt(2)!=':'){
        errores.push("Debe ingresar una hora valida con este formato (HH:MM)");
    }
    if(direccion===""){
        errores.push ("Debe ingresar una dirección");
    }
    if(valor<0 || valor >500 || valor=="0"){
        errores.push("Debe ingresar un valor válido");
    }
    if(errores.length == 0){
        let medicion = {};
        medicion.fecha = fecha;
        medicion.hora = hora;
        medicion.medidor = medidor;
        medicion.direccion = direccion;
        medicion.valor = valor;
        medicion.medida = medida;
        let res = await save(medicion);
        await Swal.fire("Medicion Creada","Medicion creada exitosamente","info");
    }else{
        Swal.fire({
            title:"Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        })
    }
});