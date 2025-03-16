import './Category.scss';
import Masonry from './Masonry';
export default function Category() {
    return (
        <section id="category" className="px-32 max-md:px-16 max-sm:px-8 pt-4 msd:pt-8 flex flex-col w-full space-y-16 max-sm:space-y-8 ">
            <div class="text-center px-4">
                <div class="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4">
                    Shop By <span class="text-transparent bg-gradient-to-r from-[#C1842D] to-[#ECC974] bg-clip-text inline-block">Category</span>
                </div>
            </div>

            <Masonry></Masonry>

        </section>
    )
}