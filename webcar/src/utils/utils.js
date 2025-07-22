import { v4 as uuidv4 } from 'uuid';

const nameFileUUID = (nombreArchivo) => {
  const [, extension] = nombreArchivo.split(".");
  const newUUID = uuidv4();
  const newName = `${newUUID}.${extension}`
  return newName;
}

const convertDateToLocal = (fechaYHora, zonaHoraria = "es-ES") => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };

    const fecha = new Date(fechaYHora);
    return fecha.toLocaleDateString(zonaHoraria, options);    
}

export { convertDateToLocal, nameFileUUID }

