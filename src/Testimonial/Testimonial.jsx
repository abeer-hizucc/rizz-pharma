import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard from "./TestimonialCard";
import 'swiper/css';
import 'swiper/css/pagination';
import { CardData } from "./Carddata";
import { A11y, Pagination, Scrollbar, Navigation, Autoplay } from 'swiper/modules';

export default function Testimonial() {
    return (
        <section id="testimonial" className="flex flex-col space-y-10 w-full py-16">
            {/* Title */}
            <div className="text-center px-4">
                <div className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4">
                    Hear What <span className="text-transparent bg-gradient-to-r from-[#C1842D] to-[#ECC974] bg-clip-text inline-block">Rizz</span> Patients
                </div>
                <div className="text-3xl md:text-4xl lg:text-6xl font-bold text-white">
                    Have To Say
                </div>
            </div>

            <div className="flex justify-center">
                <Swiper
                    modules={[Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={90}
                    breakpoints={{
                        390: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        840: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 }
                    }}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{
                        clickable: true,
                        renderBullet: (index, className) =>
                            `<span class="${className} w-6 h-6 mx-1 bg-gray-400 rounded-full inline-block transition-all"></span>`
                    }}
                    scrollbar={{ draggable: true }}
                >
                    {CardData.map((cardData, index) => (
                        <SwiperSlide key={index}>
                            <TestimonialCard
                                quote={cardData.quote}
                                ratings={cardData.ratings}
                                image={cardData.image}
                                name={cardData.name}
                                designation={cardData.designation}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


        </section>
    );
}
