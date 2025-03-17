import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CardArrangement({ products }) {
    const swiperRef = useRef(null);

    return (
        <div className="relative w-full">
            <Swiper
                ref={swiperRef}
                modules={[Navigation]}
                spaceBetween={20}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 },
                    1600: {slidesPerView:4}  
                }}
                className="w-full"
            >
                {products.length === 0 ? (
                    <p className="text-white text-center">No products available.</p>
                ) : (
                    products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))
                )}
            </Swiper>

            <div className="flex justify-center mt-4 space-x-4">
                <button
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                    className="p-3 hover:cursor-pointer rounded-full bg-[#E1C06E] hover:bg-[#ECC974] transition"
                >
                    <ChevronLeft className="w-6 h-6 text-black" />
                </button>
                <button
                    onClick={() => swiperRef.current.swiper.slideNext()}
                    className="p-3 hover:cursor-pointer rounded-full bg-[#E1C06E] hover:bg-[#ECC974] transition"
                >
                    <ChevronRight className="w-6 h-6 text-black" />
                </button>
            </div>
        </div>
    );
}
