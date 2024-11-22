import { useState } from "react";

function AddProductsView() {
    const [ formData2, setFormData2 ] = useState({ prenda: "", categoria: "", precio: "", imagen_principal: "", color: "" });

    const handleData2 = (event) => {
        const { name, value } = event.target;
        setFormData2({ ...formData2, [name]: value });
    }

    const handleSubmit2 = async (e) => {
        e.preventDefault();

        try {
            const endPoint = "http://127.0.0.1:3000/api/ropa/";
            const config = {
                headers: {
                    'Content-Type' : 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(formData2)
            }

            const response = await fetch(endPoint, config);

            if(!response.ok) {
                console.error(response);
            }

            const data = await response.json();
            console.log(data);

            if(response.ok) {
                setFormData2({
                    prenda: "",
                    categoria: "",
                    precio: "",
                    imagen_principal: "",
                    color: ""
                });

                setInterval(() => {
                    window.location.pathname = "/products";
                }, 1500);
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    return (
        <>
            <section className="mt-20 min-h-screen">
                <h2 className="p-5 text-black text-2xl font-semibold text-center uppercase">
                    Agregar nueva prenda
                </h2>

                <div className="flex flex-row justify-center gap-8 p-5 w-full">
                    <form action="" className="flex flex-col items-center gap-4 p-5 w-1/2 bg-red-900 text-white border-2 border-red-900 rounded-lg" onSubmit={handleSubmit2} autoComplete="on">
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="prenda" className="w-max font-semibold">Nombre de la prenda:</label>
                            <input
                                type="text"
                                name="prenda"
                                id="prenda"
                                autoComplete="off"
                                placeholder="Prenda - temporada - etc"
                                onChange={handleData2}
                                value={formData2.prenda}
                                className="p-3 w-full bg-gray-300 rounded-lg outline-none transition-colors text-black placeholder:text-black placeholder:text-opacity-75 focus:bg-gray-100 focus:placeholder:text-opacity-60"
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="categoria" className="w-max font-semibold">Categoría de la camiseta:</label>
                            <select
                                name="categoria"
                                id="categoria"
                                onChange={handleData2}
                                value={formData2.categoria}
                                className="p-3 w-full bg-gray-300 text-black rounded-lg outline-none transition-colors focus:bg-gray-100"
                            >
                                <option value="Remeras">Remeras</option>
                                <option value="Camperas">Camperas</option>
                                <option value="Gorros">Gorros</option>
                                <option value="Chomba">Chomba</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="imagen_principal" className="w-max font-semibold">URL de la imágen de portada:</label>
                            <input
                                type="url"
                                name="imagen_principal"
                                id="imagen_principal"
                                autoComplete="off"
                                placeholder="https://www.imagen_principal.com"
                                onChange={handleData2}
                                value={formData2.imagen_principal}
                                className="p-3 w-full bg-gray-300 rounded-lg outline-none transition-colors text-black placeholder:text-black placeholder:text-opacity-75 focus:bg-gray-100 focus:placeholder:text-opacity-60"
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="color" className="w-max font-semibold">Color:</label>
                            <input
                                type="text"
                                name="color"
                                id="color"
                                autoComplete="on"
                                placeholder="ej: Bordo"
                                onChange={handleData2}
                                value={formData2.color}
                                className="p-3 w-full bg-gray-300 rounded-lg outline-none transition-colors text-black placeholder:text-black placeholder:text-opacity-75 focus:bg-gray-100 focus:placeholder:text-opacity-60"
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="precio" className="w-max font-semibold">Precio:</label>
                            <input
                                type="number"
                                name="precio"
                                id="precio"
                                autoComplete="off"
                                placeholder="ej: 16000"
                                onChange={handleData2}
                                value={formData2.precio}
                                className="p-3 w-full bg-gray-300 rounded-lg outline-none transition-colors text-black placeholder:text-black placeholder:text-opacity-75 focus:bg-gray-100 focus:placeholder:text-opacity-60"
                            />
                        </div>

                        <div className="flex flex-col gap-2 mt-8 w-full">
                            <button
                                type="submit"
                                className="p-2 bg-white text-red-900 text-center font-semibold rounded-lg transition-colors hover:bg-gray-200"
                            >
                                Agregar prenda
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default AddProductsView;