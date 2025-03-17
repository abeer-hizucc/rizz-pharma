import { useState, useEffect } from "react";
import CategorySlider from "./CategorySlider";
import CardArrangement from "./CardArrangement";

export default function TopProduct() {
    const [productsByCategory, setProductsByCategory] = useState({});
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        fetch("https://abeer-hizucc.github.io/rizz-pharma-data/products.json")
            .then((response) => response.json())
            .then((data) => {
                const categorizedProducts = {};
                data.forEach((category) => {
                    categorizedProducts[category.Category] = category.Products || [];
                });
                setProductsByCategory(categorizedProducts);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    

    const displayedProducts =
        selectedCategory === "All"
            ? Object.values(productsByCategory || {}).flat()
            : productsByCategory[selectedCategory] || [];

    return (
        <section id="topProduct" className="py-8 md:py-16 lg:py-32 px-16 md:px-64 lg:px-90 flex flex-col space-y-8 w-full justify-center">
            <div className="text-center px-4">
                <div className="text-3xl md:text-4xl lg:text-6xl font-bold text-white ">
                    Solutions for Your{" "}
                    <span className="text-transparent bg-gradient-to-r from-[#C1842D] to-[#ECC974] bg-clip-text inline-block">
                        Unique
                    </span>{" "}
                    Health Goals
                </div>
            </div>

            <CategorySlider selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <CardArrangement products={displayedProducts} />
        </section>
    );
}
