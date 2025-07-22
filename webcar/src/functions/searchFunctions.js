const filterByRepuesto = (repuestos, descrip) => {
  return repuestos.filter(
    (rpto) => rpto.toString().toLowerCase().indexOf(descrip.toLowerCase()) > -1,
  );
  
  
  
//     const repuestosFiltered = repuestos.filter((rpto) => {
//      return rpto.repuesto.toString().toLowerCase().includes(descrip.toLowerCase());
//   });
//   return repuestosFiltered;
};


export {
    filterByRepuesto
}