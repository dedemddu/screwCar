import axios from 'axios';

const URL = import.meta.env.VITE_ENDPOINT_BASE;

const obtenerRepuestos = async () => {
    try {
        const rpta = await axios.get(`${URL}/repuestos`);
       // console.log(rpta);
        if (rpta.status === 200) {
            return rpta.data;
        }
        throw new Error ("No se carga los repuestos");
    } catch (error) {
      throw error;        
    }
}

const newRepuesto = async (repuesto) => {
    try {
        const rpta = await axios.post(`${URL}/repuestos`, repuesto);
        console.log (rpta);
        return rpta.data;        
    } catch (error) {
      throw error;        
    }
}

const obtenerRepuestoPorId = async (id) => {
    try {
        const rpta = await axios.get(`${URL}/repuestos/${id}`);
        console.log ("obtenerRepuestoPorId: ",rpta);
        return rpta.data;    
    } catch (error) {
     throw error;
    }
}

const updateRepuesto = async (id, repuesto) => {
    try {
        const rpta = await axios.put(`${URL}/repuestos/${id}`, repuesto);
        console.log ("updateRepuesto: ", rpta);
        return rpta.data;
    } catch (error) {
      throw error;  
    }
}

const deleteRepuesto = async (id) => {
    try {
        const rpta = await axios.delete(`${URL}/repuestos/${id}`);
        console.log ("deleteRepuesto: ", rpta);
        return rpta.data;
    } catch (error) {
      throw error;        
    }
}

export {
    obtenerRepuestos,
    newRepuesto,
    obtenerRepuestoPorId,
    updateRepuesto,
    deleteRepuesto
}