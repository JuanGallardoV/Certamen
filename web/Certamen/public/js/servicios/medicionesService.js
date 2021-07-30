const getMedi = async ()=>{
    let resultado = await axios.get("api/medi/get");
    return resultado.data;
};

const save = async(medicion)=>{
    let resp=await axios.post("api/mediciones/post", medicion,{
        headers:{
            'content-type':'application/json'
        }
    });
    return resp.data;
};

const eliminarMedicion = async(id)=>{
    try{
        let resp = await axios.post("api/mediciones/delete", {id},{
        headers:{
            "Content-Type": "application/json"
        }
    });
    return resp.data =="ok";
    }catch(e){
        return false;
    }
};
const getMediciones = async()=>{
    let resp = await axios.get("api/mediciones/get");
    return resp.data;
};