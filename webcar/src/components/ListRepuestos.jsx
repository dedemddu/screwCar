import RepuestoCard from "./RepuestoCard";

const ListRepuestos = ({ rptos }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-3 flex justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rptos ? (
            rptos.map((rpto) => <RepuestoCard key={rpto.id} disrepuesto={rpto} />)
            // rptos.map((rpto) => <RepuestoCard key={rpto.id} unidadrpto={rpto} />)
          ) : (
              <p>No se encontraron repuestos</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListRepuestos;