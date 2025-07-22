
import { useState } from "react";
import { newRepuesto } from "../controllers/repuestoControlllers";
import { uploadFile } from "../controllers/storageControllers";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import FormRepuesto from "../components/FormRepuesto";

let imagen;

const NewRepuestoView = () => {
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
    };

    const handleImage = (ev) => {
        console.log("handleImage ", ev.target.files[0]);
        imagen = ev.target.files[0];
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
                title: "Registrando nuevo repuesto",
                text: "Espere por favor",
                icon: "info",                
            });

            const urlImagen = await uploadFile(imagen);
            console.log(urlImagen);

            let nuevoRepuesto = {
                ...values,
            };
            console.log(urlImagen);

            if(urlImagen !== "") {
                nuevoRepuesto.foto = urlImagen;
            }

            const resultado = await newRepuesto(nuevoRepuesto);
            loading.close();

            await Swal.fire({
                title: "Repuesto registrado",
                text: `${values.repuesto} se creo exitosamente`,
                icon: "success",
            });
            navigate("/");
    };
  return (
    <FormRepuesto 
        handleValues={handleValues}
        handleImage={handleImage}
        handleSubmit={handleSubmit}
        values={values}
        title="Registro Repuesto"
    />
  );
};

export default NewRepuestoView;