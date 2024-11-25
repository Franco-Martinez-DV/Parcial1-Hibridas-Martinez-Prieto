import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetailView() {
    let [ productoBuscado, setProductoBuscado ] = useState(null);
    const { id } = useParams();

    const getProducts = async () => {
        const resp = await fetch("http://127.0.0.1:3000/api/camisetas");
        const data = await resp.json();
        const foundProduct = data.data.find((producto) => producto._id === id);

        setProductoBuscado(foundProduct);
    }

    useEffect(() => {
        getProducts();
    }, [id]);

    if(!productoBuscado) {
        return <p>ERROR - No se encontró este producto.</p>;
    }

    const priceFormat = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS"
    });

    return (
        <>
            <section className="min-h-screen mt-20">
                <h1 className="p-5 text-black text-4xl font-bold uppercase">
                    {productoBuscado.camiseta} - {productoBuscado.temporada} - {productoBuscado.categoria}
                </h1>

                <div className="flex flex-row gap-4 m-5">
                    <div className="flex flex-row gap-4 w-1/2 p-5 bg-neutral-400 rounded-s-lg">
                        <div className="flex flex-col items-center justify-between gap-4 w-3/12">
                            <img
                                src={productoBuscado.imagen_principal}
                                alt={productoBuscado.camiseta}
                                className="w-full p-5 bg-white border-2 border-transparent rounded-ss-lg transition-colors cursor-pointer hover:border-black"
                            />

                            <img
                                src={productoBuscado.imagen_principal}
                                alt={productoBuscado.camiseta}
                                className="w-full p-5 bg-white border-2 border-transparent transition-colors cursor-pointer hover:border-black"
                            />

                            <img
                                src={productoBuscado.imagen_principal}
                                alt={productoBuscado.camiseta}
                                className="w-full p-5 bg-white border-2 border-transparent rounded-es-lg transition-colors cursor-pointer hover:border-black"
                            />
                        </div>

                        <div className="w-4/5">
                            <img
                                src={productoBuscado.imagen_principal}
                                alt={productoBuscado.camiseta}
                                className="w-full p-5 bg-white rounded-e-lg cursor-pointer"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 w-1/2">
                        <h2 className="w-max p-4 text-3xl font-medium">
                            {productoBuscado.camiseta}
                        </h2>

                        <div className="mx-4">
                            <p><span className="text-[#E2211C] font-semibold">Categoría: </span>{productoBuscado.categoria}</p>
                            <p><span className="text-[#E2211C] font-semibold">Temporada: </span>{productoBuscado.temporada}</p>
                            <p><span className="text-[#E2211C] font-semibold">Precio: </span>{priceFormat.format(productoBuscado.precio)}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductDetailView;