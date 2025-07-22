import ListRepuestos from "../components/ListRepuestos";
import useAxios from "../hooks/useAxios";

const SaleRepuestoView = () => {

    const URL = import.meta.env.VITE_ENDPOINT_BASE;
    
    const { data, error, loading } = useAxios(`${URL}/repuestos`);
    
    return (
        <div className="grid mt-6">
            <div className="flex justify-between gap-4 mx-auto max-w-7xl md:px-2 px-6 sm:px-6 lg:px-8 md:flex-row flex-col ">
                <div className="lg:w-3/4 w-full">
                    <ListRepuestos rptos={data} />                    
                </div>
            </div>            
        </div>        
    )
}

export default SaleRepuestoView