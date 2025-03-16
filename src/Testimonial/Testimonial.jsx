import TestimonialCard from "./TestimonialCard";
import Glide from "@glidejs/glide";
import { useEffect } from "react";
import { Swipe } from "@glidejs/glide/dist/glide.modular.esm.js";
import { CardData } from "./Carddata";

const sliderConfig = {
    gap: 80,
    focusAt: 'center',
    keyboard: true,
    autoplay:4000,
    perView: 4,
    startAt: 0,
    type: "carousel",
    breakpoints: {
        1250: {
            perView: 3
        },
        900: {
            perView: 2
        },
        480: {
            perView: 1
        }
    }
}
export default function Testimonial() {
    const slider = new Glide('.glide', sliderConfig);
    useEffect(() => {
        return () => slider.mount({ Swipe })
    }, [slider]);

    return (
        <section id="testimonial" className="flex flex-col space-y-10 w-full py-16 ">

            <div class="text-center px-4">
                <div class="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4">
                    Hear What <span class="text-transparent bg-gradient-to-r from-[#C1842D] to-[#ECC974] bg-clip-text inline-block">Rizz</span> Patients
                </div>
                <div class="text-3xl md:text-4xl lg:text-6xl font-bold text-white">
                    Have To Say
                </div>
            </div>

            <div className="flex justify-center">
                <div className='glide'>
                    <div className='glide__track' data-glide-el='track'>
                        <ul className='glide__slides flex justify-center'>
                            {CardData.map((cardData, item) =>
                            (
                                <li key={item} className='glide__slide '><TestimonialCard quote={cardData.quote} ratings={cardData.ratings} image={cardData.image} name={cardData.name} designation={cardData.designation} /></li>
                            )
                            )}

                        </ul>
                    </div>
                    <div class="glide__bullets !-bottom-8" data-glide-el="controls[nav]">
                        <button class="glide__bullet" data-glide-dir="=0"></button>
                        <button class="glide__bullet" data-glide-dir="=1"></button>
                        <button class="glide__bullet" data-glide-dir="=2"></button>
                        <button class="glide__bullet" data-glide-dir="=3"></button>
                        <button class="glide__bullet" data-glide-dir="=4"></button>
                        <button class="glide__bullet" data-glide-dir="=5"></button>
                    </div>
                </div>
            </div>

        </section>
    )
}