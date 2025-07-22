import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { uploadFile } from "../controllers/storageControllers";
import { useNavigate } from "react-router-dom";
import { obtenerRepuestoPorId, updateRepuesto } from "../controllers/repuestoControlllers";
import FormRepuesto from "../components/FormRepuesto";
import Swal from "sweetalert2";

let imagen;

const EditRepuestoView = () => {
    const [values, setValues] = useState({
        repuesto: "",
        marcaFabricante: "",
        modeloFabricante: "",
        serieFabricante: "",
        fabricante: "",
        dimension: "",
        autoParte: "",
        marcaAuto: "",
        modeloAuto: "",
        anioAuto: 0,
        precio: 0,
        foto: "https://firebasestorage.googleapis.com/v0/b/autosoftwebdb.appspot.com/o/1_Pastilla_de_Freno.png?alt=media&token=305164a3-f503-4135-a3f9-74a886bcba84",
    });  

    const { id } = useParams();

    const navigate = useNavigate();

    const handleValues = (ev) => {
        console.log(ev.target.name);
        const nombrePropiedad = ev.target.name;
        const valorPropiedad = ev.target.value;
        const newRpto = {
           ...values,
            [nombrePropiedad]: valorPropiedad,
        };
        setValues(newRpto);
    }

    const handleImage = (ev) => {
        console.log("handleImage: ", ev.target.file[0]);
        imagen = ev.target.file[0];
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const { repuesto, 
                marcaFabricante, 
                modeloFabricante, 
                serieFabricante,
                fabricante,
                dimension,
                autoParte,
                marcaAuto,
                modeloAuto,
                anioAuto,
                precio 
            } = values;

            if (repuesto === "" || marcaFabricante === "" || modeloFabricante === "" || serieFabricante === "" || fabricante === "" || dimension === "" || autoParte === "" || marcaAuto === "" || modeloAuto === "" || anioAuto === 0 || precio === 0 ) {
                Swal.fire({
                    title: "Registro incompleto",
                    text: "Verifique el registro",
                    icon: "error",
                });
                return;
            }

            const loading = Swal.fire({
                title: "Actualizando repuesto",
                text: "Espere por favor",
                icon: "info",                
            });

            let urlImagen = "";

            if(imagen !== undefined) {
                urlImagen = await uploadFile(imagen);
            }

            let repuestoActualizado = {
                ...values,
            }

            if(urlImagen!== "" && imagen !== undefined) {
                repuestoActualizado.foto = urlImagen;                  
            }

            const resultado = await updateRepuesto(id, repuestoActualizado);
            loading.close();

            await Swal.fire({
                title: "Repuesto actualizado",
                text: `${values.repuesto} se actualizó exitosamente`,
                icon:'success',                
            });

            navigate("/");
    };

    useEffect(() => {
        const getRepuesto = async () => {
            try {
                const resultado = await obtenerRepuestoPorId(id);
                setValues(resultado);    
            } catch (error) {
              console.log(error);
            }            
        }
        getRepuesto();
    },[]);
    return (
        <FormRepuesto 
            handleValues={handleValues} 
            handleImage={handleImage} 
            handleSubmit={handleSubmit}
            values={values}
            title="Editar Repuesto" 
        />
    )
}

export default EditRepuestoView