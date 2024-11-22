import { useParams } from "react-router-dom";

function ProductDetailView() {
    const { id } = useParams();

    return (
        <>
            <section>
                <div className="p-5 mt-20 h-screen w-full">
                    <h2>{id}</h2>
                </div>
            </section>
        </>
    );
}

export default ProductDetailView;