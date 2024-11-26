import { useState } from "react";

function AddProductsView() {
    const [ formData, setFormData ] = useState({
        camiseta: "Actual",
        categoria: "Titular",
        imagen_principal:  "/Images/Products/",
        imagen_secundaria: "/Images/Products/",
        imagen_terciaria:  "/Images/Products/",
        imagen_cuaternaria:  "/Images/Products/",
        temporada: "",
        precio: ""
    });

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
                    camiseta: "Actual",
                    categoria: "Titular",
                    imagen_principal:  "/Images/Products/",
                    imagen_secundaria: "/Images/Products/",
                    imagen_terciaria:  "/Images/Products/",
                    imagen_cuaternaria:  "/Images/Products/",
                    temporada: "",
                    precio: ""
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
                            <label htmlFor="camiseta" className="w-max font-semibold">Tipo de camiseta:</label>
                            <select
                                name="camiseta"
                                id="camiseta"
                                onChange={handleData}
                                value={formData.camiseta}
                                className="p-3 w-full bg-gray-300 rounded-lg outline-none transition-colors placeholder:text-black placeholder:text-opacity-75 focus:bg-gray-100 focus:placeholder:text-opacity-60"
                            >
                                <option value="Actual">Actual</option>
                                <option value="Moderna">Moderna</option>
                                <option value="Retro">Retro</option>
                            </select>
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
                            </select>
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="imagen_principal" className="w-max font-semibold">Imagen de portada:</label>
                            <input
                                type="text"
                                name="imagen_principal"
                                id="imagen_principal"
                                autoComplete="off"
                                onChange={handleData}
                                value={formData.imagen_principal}
                                className="p-3 w-full bg-gray-300 rounded-lg outline-none transition-colors placeholder:text-black placeholder:text-opacity-75 focus:bg-gray-100 focus:placeholder:text-opacity-60"
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="imagen_secundaria" className="w-max font-semibold">Imagen de muestra:</label>
                            <input
                                type="text"
                                name="imagen_secundaria"
                                id="imagen_secundaria"
                                autoComplete="off"
                                onChange={handleData}
                                value={formData.imagen_secundaria}
                                className="p-3 w-full bg-gray-300 rounded-lg outline-none transition-colors placeholder:text-black placeholder:text-opacity-75 focus:bg-gray-100 focus:placeholder:text-opacity-60"
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="imagen_terciaria" className="w-max font-semibold">Imágen de muestra:</label>
                            <input
                                type="text"
                                name="imagen_terciaria"
                                id="imagen_terciaria"
                                autoComplete="off"
                                onChange={handleData}
                                value={formData.imagen_terciaria}
                                className="p-3 w-full bg-gray-300 rounded-lg outline-none transition-colors placeholder:text-black placeholder:text-opacity-75 focus:bg-gray-100 focus:placeholder:text-opacity-60"
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="imagen_cuaternaria" className="w-max font-semibold">Imagen de muestra:</label>
                            <input
                                type="text"
                                name="imagen_cuaternaria"
                                id="imagen_cuaternaria"
                                autoComplete="off"
                                onChange={handleData}
                                value={formData.imagen_cuaternaria}
                                className="p-3 w-full bg-gray-300 rounded-lg outline-none transition-colors placeholder:text-black placeholder:text-opacity-75 focus:bg-gray-100 focus:placeholder:text-opacity-60"
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="temporada" className="w-max font-semibold">Temporada o Año:</label>
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
                                min={1}
                                placeholder="ej: 79999.99"
                                onChange={handleData}
                                value={formData.precio}
                                className="p-3 w-full bg-gray-300 rounded-lg outline-none transition-colors placeholder:text-black placeholder:text-opacity-75 focus:bg-gray-100 focus:placeholder:text-opacity-60"
                            />
                        </div>

                        <div className="flex flex-col gap-2 mt-8 w-full">
                            <button
                                type="submit"
                                disabled={formData.precio <= 0}
                                className="p-2 bg-red-600 text-white text-center font-semibold rounded-lg transition-colors hover:bg-red-800 disabled:bg-opacity-40 disabled:cursor-not-allowed disabled:hover:bg-red-600 disabled:hover:bg-opacity-40"
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