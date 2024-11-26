import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MainTitle from "../components/MainTitle";

function ProductDetailView() {
    let   [ productoBuscado, setProductoBuscado ] = useState(null);
    const [ currentIndex, setCurrentIndex ] = useState(0);
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

    const productImages = [
        {
            currentIndex: 0,
            image: productoBuscado.imagen_principal
        },
        {
            currentIndex: 1,
            image: productoBuscado.imagen_secundaria
        },
        {
            currentIndex: 2,
            image: productoBuscado.imagen_terciaria
        },
        {
            currentIndex: 3,
            image: productoBuscado.imagen_cuaternaria
        }
    ]

    const validImages = productImages.filter(image => image.image);
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + validImages.length) % validImages.length
        );
    };
    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex + 1) % validImages.length
        );
    };

    const priceFormat = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS"
    });

    return (
        <>
            <section className="min-h-screen mt-20">
                <div className="flex flex-row gap-5 p-5">
                    <div className="relative flex flex-row items-center w-8/12 rounded-lg overflow-hidden">
                        {validImages.length > 0 && (
                            <img
                                src={validImages[currentIndex].image}
                                alt={`${productoBuscado.camiseta} - imagen número ${currentIndex}`}
                                className="w-full p-5"
                            />
                        )}

                        <button
                            type="button"
                            className="absolute left-0 top-1/2 flex items-center justify-center p-2 bg-black bg-opacity-50 rounded-full transition-colors ease-in hover:bg-opacity-75 disabled:bg-opacity-30 disabled:cursor-default"
                            onClick={handlePrev}
                            disabled={validImages.length === 1}
                        >
                            <ChevronLeft className="size-6 text-white" />
                        </button>

                        <button
                            type="button"
                            className="absolute right-0 top-1/2 flex items-center justify-center p-2 bg-black bg-opacity-50 rounded-full transition-colors ease-in hover:bg-opacity-75 disabled:bg-opacity-30 disabled:cursor-default"
                            onClick={handleNext}
                            disabled={validImages.length === 1}
                        >
                            <ChevronRight className="size-6 text-white" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-5 w-full p-5">
                        <MainTitle title={`${productoBuscado.camiseta} ${productoBuscado.categoria} - ${productoBuscado.temporada}`}/>

                        <div>
                            <p><span className="text-[#E2211C] font-semibold">Categoría: </span>{productoBuscado.categoria}</p>
                            <p><span className="text-[#E2211C] font-semibold">Temporada: </span>{productoBuscado.temporada}</p>
                            <p><span className="text-[#E2211C] font-semibold">
                                Precio: </span>{priceFormat.format(productoBuscado.precio)}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductDetailView;