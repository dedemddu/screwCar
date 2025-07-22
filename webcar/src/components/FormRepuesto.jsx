const FormRepuesto = ({ handleValues, handleImage, handleSubmit, values, title }) => {
  return (
    <div className="container pt-4">
        <h4 className="mb-4">{ title }</h4>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label" htmlFor="repuesto">
                    Repuesto
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="repuesto"
                    placeholder="Ej. Bujía"
                    name="repuesto" 
                    value = {values.repuesto}
                    onChange = {handleValues}
                />
            </div>
            <div className="mb-2">
                <label className="form-label" htmlFor="marcaFabricante">
                    Marca de Fabricante
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="marcaFabricante"
                    placeholder="Ej. Bosch"
                    name="marcaFabricante" 
                    value = {values.marcaFabricante}
                    onChange = {handleValues}
                />
            </div>
            <div className="mb-2">
                <label className="form-label" htmlFor="modeloFabricante">
                    Modelo Fabricante
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="modeloFabricante"
                    placeholder="Ej. P56024"
                    name="modeloFabricante" 
                    value = {values.modeloFabricante}
                    onChange = {handleValues}
                />
            </div>
            <div className="mb-2">
                <label className="form-label" htmlFor="serieFabricante">
                    Serie de Fabricante
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="serieFabricante"
                    placeholder="Ej. B123"
                    name="serieFabricante" 
                    value = {values.serieFabricante}
                    onChange = {handleValues}
                />
            </div>
            <div className="mb-2">
                <label className="form-label" htmlFor="fabricante">
                    Fabricante
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="fabricante"
                    placeholder="Ej. Bosch GmbH"
                    name="fabricante" 
                    value = {values.fabricante}
                    onChange = {handleValues}
                />
            </div>
            <div className="mb-2">
                <label className="form-label" htmlFor="dimension">
                    Dimensión
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="dimension"
                    placeholder="Ej. 24x17x19"
                    name="dimension" 
                    value = {values.dimension}
                    onChange = {handleValues}
                />
            </div>
            <div className="mb-2">
                <label className="form-label" htmlFor="autoParte">
                    Auto Parte
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="autoParte"
                    placeholder="Ej. Sistema de Frenos"
                    name="autoParte" 
                    value = {values.autoParte}
                    onChange = {handleValues}
                />
            </div>
            <div className="mb-2">
                <label className="form-label" htmlFor="marcaAuto">
                    Marca de Auto
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="marcaAuto"
                    placeholder="Ej. Honda"
                    name="marcaAuto" 
                    value = {values.marcaAuto}
                    onChange = {handleValues}
                />
            </div>
            <div className="mb-2">
                <label className="form-label" htmlFor="modeloAuto">
                    Modelo de Auto
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="modeloAuto"
                    placeholder="Ej. Rav4 "
                    name="modeloAuto" 
                    value = {values.modeloAuto}
                    onChange = {handleValues}
                />
            </div>
            <div className="mb-2">
                <label className="form-label" htmlFor="anioAuto">
                    Año
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="anioAuto"
                    placeholder="Ej. 2018"
                    name="anioAuto" 
                    value = {values.anioAuto}
                    onChange = {handleValues}
                />
            </div>
            <div className="mb-2">
                <label className="form-label" htmlFor="precio">
                    Precio de Repuesto
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="precio"
                    placeholder="Ej. 586.50"
                    name="precio" 
                    value = {values.precio}
                    onChange = {handleValues}
                />
            </div>
            <div className="mb-2">
                <label className="form-label" htmlFor="foto">
                    Foto
                </label>
                <input
                    type="file"
                    className="form-control"
                    onChange = {handleImage}
                />
            </div>
            <button type="submit" className="btn btn-primary btn-lg">
                Grabar
            </button>
        </form>
    </div>
  );
};

export default FormRepuesto;