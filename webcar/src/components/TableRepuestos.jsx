import { Link } from "react-router-dom";

const TableRepuestos = ({ repuestos, handleEliminar }) => {
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Descripción</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Fabricante</th>
                        <th>AutoParte</th>
                        <th>MarcaAuto</th>
                        <th>Año</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {repuestos.map(
                        ({ repuesto, marcaFabricante, modeloFabricante, fabricante, autoParte, marcaAuto, anioAuto, precio, id }) => (
                            <tr key={id}>
                                <td>{repuesto}</td>
                                <td>{marcaFabricante}</td>
                                <td>{modeloFabricante}</td>
                                <td>{fabricante}</td>
                                <td>{autoParte}</td>
                                <td>{marcaAuto}</td>
                                <td>{anioAuto}</td>
                                <td>S/.{precio}</td>
                                <td className="d-flex">
                                    <Link className="btn btn-primary btn-sm" to={`/editrepuesto/${id}`}>
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </Link>
                                    <button className="btn btn-danger btn-sm ms-2" onClick={() => {handleEliminar(id)}}>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </>
    );
};

export default TableRepuestos;