import { useEffect, useState } from 'react';
import TableRepuestos from '../components/TableRepuestos';
import { obtenerRepuestos, deleteRepuesto } from '../controllers/repuestoControlllers';
import Swal from "sweetalert2";

const HomeView = () => {
  const [repuestos, setRepuestos] = useState([]);

  const getRepuestos = async () => {
    const rptos = await obtenerRepuestos();
    setRepuestos(rptos);
  }
  //handleEliminar
  const handleEliminar = async (id) => {
    const opcionUsuario = await Swal.fire({
      title: '¿Desea quitar el repuesto de la lista?',
      text: "No podrá regresar al estado anterior!",
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, no deseo elminarlo',
    });

    const { isConfirmed, isDismissed } = opcionUsuario;
    if (isConfirmed) {
      const opcionEliminar = await deleteRepuesto(id);

      await Swal.fire({
        title: 'Repuesto eliminado',
        text: 'El repuesto ha sido eliminado de la lista',
        icon:'success'       
      })
      getRepuestos();
    }
  }

  useEffect(() => {
    try {
        getRepuestos();        
      } catch (error) {
      console.log(error);    
    }

  }, []);

  return (
    <div className='container py-3'>
       <h4 className='mb-2'>Lista de Repuestos</h4>
        <TableRepuestos repuestos = {repuestos} handleEliminar={handleEliminar} />
    </div>
  )
}

export default HomeView;