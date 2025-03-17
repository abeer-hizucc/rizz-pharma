import ProductCard from "./ProductCard";

export default function CardArrangement({ products}) {
    return (
        <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {products.length === 0 ? (
                <p className="col-span-4 text-white text-center">No products available.</p>
            ) : (
                products.map((product, index) => (
                    <div key={index} className="col-span-1">
                        <ProductCard product={product} />
                    </div>
                ))
            )}
        </div>
    );
}