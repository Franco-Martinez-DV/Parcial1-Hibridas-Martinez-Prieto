import { Search, BadgeDollarSign } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductsView() {
    let [ recargar ] = useState(false);
    let [ productos, setProductos ] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const resp = await fetch('http://127.0.0.1:3000/api/camisetas');
            const data = await resp.json();

            setProductos(data.data);
        }
        
            getProducts();
        }, [recargar]);

    let [ recargar2 ] = useState(false);
    let [ productos2, setProductos2 ] = useState([]);

    useEffect(() => {
        const getProducts2 = async () => {
            const resp = await fetch('http://127.0.0.1:3000/api/ropa');
            const data = await resp.json();

            setProductos2(data.data);
        }
        
            getProducts2();
        }, [recargar2]);

    return (
        <>
            <section className="mt-20">
                <h2 className="p-5 text-black text-2xl font-semibold text-center uppercase">
                    Todos los productos
                </h2>

                <div>
                    <header className="flex flex-row items-center justify-between p-5 text-black">
                        <div className="flex flex-row items-center w-full">
                            <label htmlFor="search-product" className="p-3 w-max font-semibold bg-neutral-100 rounded-s-lg outline-none">
                                <Search className="text-black" />
                            </label>

                            <input
                                type="search"
                                name="search-product"
                                id="search-product"
                                placeholder="Buscar producto"
                                className="p-3 w-1/2 bg-neutral-100 text-black rounded-e-lg outline-none placeholder:text-black placeholder:text-opacity-75"
                            />
                        </div>

                        <div className="flex flex-col items-start gap-1">
                            <label
                                htmlFor="sort-by"
                                className="w-max font-semibold"
                            >
                                Ordenar por:
                            </label>
                            <select name="sort-by" id="sort-by" className="p-2 text-black bg-neutral-100 rounded-lg outline-none">
                                <option value="popular">Destacados</option>
                                <option value="a-z">Alfabéticamente: De la A - Z</option>
                                <option value="z-a">Alfabéticamente: De la Z - A</option>
                                <option value="higher-price">Precio: Más alto a más bajo</option>
                                <option value="lower-price">Precio: Más bajo a más alto</option>
                            </select>
                        </div>
                    </header>

                    <div className="grid grid-cols-4 gap-5 p-5 w-full">
                        {
                            productos.map((product) => (
                                <div className="flex flex-col justify-between items-start gap-3 p-2 bg-white border-2 border-black rounded-md" key={product._id}>
                                    <h3 className="w-full text-lg text-center font-semibold">{product.camiseta}</h3>

                                    <div className="flex flex-col items-center overflow-hidden">
                                        <img
                                            src={product.imagen_principal}
                                            alt={product.camiseta}
                                            className="w-2/3 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-125"
                                        />
                                    </div>

                                    <div className="flex flex-col items-start gap-2 p-2">
                                        <p>
                                            <span className="font-semibold">Precio: </span> ${product.precio}
                                        </p>

                                        <p>
                                            <span className="font-semibold">Categoría: </span> {product.categoria}
                                        </p>

                                        <p>
                                            <span className="font-semibold">Temporada: </span> {product.temporada}
                                        </p>
                                    </div>

                                    <NavLink
                                        to={`/product/${product._id}`}
                                        className="p-2 w-full bg-red-600 text-white text-center font-semibold rounded-sm  transition-colors hover:bg-red-700"
                                    >
                                        <span
                                            className="flex flex-row items-center justify-center gap-4"
                                        >
                                            <BadgeDollarSign className="size-5" /> Ver este artículo
                                        </span>
                                    </NavLink>
                                </div>
                            ))
                        }

                        {
                            productos2.map((product) => (
                                <div className="flex flex-col justify-between items-start gap-3 p-2 bg-white border-2 border-black rounded-md" key={product._id}>
                                    <h3 className="w-full text-lg text-center font-semibold">{product.prenda}</h3>

                                    <div className="flex flex-col items-center overflow-hidden">
                                        <img
                                            src={product.imagen_principal}
                                            alt={product.prenda}
                                            className="w-2/3 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-125"
                                        />
                                    </div>

                                    <div className="flex flex-col items-start gap-2 p-2">
                                        <p>
                                            <span className="font-semibold">Precio: </span> ${product.precio}
                                        </p>

                                        <p>
                                            <span className="font-semibold">Categoría: </span> {product.categoria}
                                        </p>

                                        <p>
                                            <span className="font-semibold">Color: </span> {product.color}
                                        </p>
                                    </div>

                                    <NavLink
                                        to={`/product/${product._id}`}
                                        className="p-2 w-full bg-red-600 text-white text-center font-semibold rounded-sm  transition-colors hover:bg-red-700"
                                    >
                                        <span
                                            className="flex flex-row items-center justify-center gap-4"
                                        >
                                            <BadgeDollarSign className="size-5" /> Ver este artículo
                                        </span>
                                    </NavLink>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductsView;