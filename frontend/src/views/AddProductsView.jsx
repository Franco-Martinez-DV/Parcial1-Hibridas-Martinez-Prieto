import { useState } from "react";

function AddProductsView() {
    const [ formData, setFormData ] = useState({ camiseta: "", categoria: "", precio: "", imagen_principal: "", temporada: "" });

    const handleData = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const endPoint = "http://127.0.0.1:3000/api/camisetas/";
            const config = {
                headers: {
                    'Content-Type' : 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(formData)
            }

            const response = await fetch(endPoint, config);

            if(!response.ok) {
                console.error(response);
            }

            const data = await response.json();
            console.log(data);

            if(response.ok) {
                setFormData({
                    camiseta: "",
                    categoria: "",
                    precio: "",
                    imagen_principal: "",
                    temporada: ""
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
                    Agregar nueva camiseta
                </h2>

                <div className="flex flex-row justify-center gap-8 p-5 w-full">
                    <form action="" className="flex flex-col items-center gap-4 p-5 w-1/2 border-2 border-black rounded-lg" onSubmit={handleSubmit} autoComplete="w-1/2">
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="camiseta" className="w-max font-semibold">Nombre de la camiseta:</label>
                            <input
                                type="text"
                                name="camiseta"
                                id="camiseta"
                                autoComplete="off"
                                placeholder="Camiseta - año - modelo - etc"
                                onChange={handleData}
                                value={formData.camiseta}
                                className="p-3 w-full bg-gray-300 rounded-lg outline-none transition-colors placeholder:text-black placeholder:text-opacity-75 focus:bg-gray-100 focus:placeholder:text-opacity-60"
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="categoria" className="w-max font-semibold">Categoría de la camiseta:</label>
                            <select
                                name="categoria"
                                id="categoria"
                                onChange={handleData}
                                value={formData.categoria}
                                className="p-3 w-full bg-gray-300 rounded-lg outline-none transition-colors placeholder:text-black placeholder:text-opacity-75 focus:bg-gray-100 focus:placeholder:text-opacity-60"
                            >
                                <option value="Titular">Titular</option>
                                <option value="Suplente">Suplente</option>
                                <option value="Alternativa">Alternativa</option>
                                <option value="Retro">Retro</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="imagen_principal" className="w-max font-semibold">URL de la imágen de portada:</label>
                            <input
                                type="text"
                                name="imagen_principal"
                                id="imagen_principal"
                                autoComplete="off"
                                placeholder="https://www.imagen_principal.com"
                                onChange={handleData}
                                value={formData.imagen_principal}
                                className="p-3 w-full bg-gray-300 rounded-lg outline-none transition-colors placeholder:text-black placeholder:text-opacity-75 focus:bg-gray-100 focus:placeholder:text-opacity-60"
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="temporada" className="w-max font-semibold">Temporada:</label>
                            <input
                                type="text"
                                name="temporada"
                                id="temporada"
                                autoComplete="on"
                                placeholder="ej: 2024/25"
                                onChange={handleData}
                                value={formData.temporada}
                                className="p-3 w-full bg-gray-300 rounded-lg outline-none transition-colors placeholder:text-black placeholder:text-opacity-75 focus:bg-gray-100 focus:placeholder:text-opacity-60"
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
                                onChange={handleData}
                                value={formData.precio}
                                className="p-3 w-full bg-gray-300 rounded-lg outline-none transition-colors placeholder:text-black placeholder:text-opacity-75 focus:bg-gray-100 focus:placeholder:text-opacity-60"
                            />
                        </div>

                        <div className="flex flex-col gap-2 mt-8 w-full">
                            <button
                                type="submit"
                                className="p-2 bg-red-600 text-white text-center font-semibold rounded-lg transition-colors hover:bg-red-800"
                            >
                                Agregar camiseta
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default AddProductsView;