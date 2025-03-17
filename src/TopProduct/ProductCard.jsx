import { ShoppingCart } from "lucide-react";

export default function ProductCard({ product }) {
    const prefix = 'https://rizzpharma.com';
    return (
        <div className="w-full h-90 flex flex-col justify-between rounded-xl bg-[#23283e] backdrop-blur-3xl hover:cursor-pointer hover:scale-105 transition ease-in-out">
            <div className={`border-b-2 border-white  w-42 px-3 py-1 rounded-bl-xl text-white flex justify-end ml-auto ${product.IsPrescriptionGenerationRequired ? "bg-[#bb6a5f]" : "bg-[#8e3c34]"}`}>
                <p className="text-md">{product.IsPrescriptionGenerationRequired ? "Research use only" : "Recurring plan"}</p>
            </div>
            <div className="flex flex-row p-2 justify-between ">
                <img src={`${prefix}${product.CoverPhoto}`} className="w-18 h-36" alt="medicine" />

                <div className="flex-1 flex items-center justify-center">
                    <span className="text-[#C1842D] text-2xl w-1/2"><b>{product.Name}</b></span>
                </div>
            </div>
            <div className="flex flex-row justify-between bg-[#212534] h-18">
                <div className="h-full flex justify-center items-center px-2">
                <p className="text-sm text-white px-2">
                    {product.IsPerMonth ? `Starting at $${product.LowestPrice} Monthly + $${product.ConsultancyFee} physician consult ` : `$${product.LowestPrice} Monthly + ${product.ConsultancyFee} physician consult`}
                </p>
                </div>
                
                <button className="bg-gradient-to-r from-[#C1842D] to-[#ECC974] w-20 h-18 flex justify-center items-center rounded-br-xl">
                    <ShoppingCart color="#FFFF" />
                </button>
            </div>
        </div>
    )

}