import './Category.scss';
import Masonry from './Masonry';
export default function Category() {
    return (
        <section className="px-32 max-md:px-16 max-sm:px-8 pt-4 msd:pt-8 flex flex-col w-full space-y-16 max-sm:space-y-8 ">
            <span className="text-4xl font-[700] flex flex-row space-x-2 justify-center text-white">
               <span> Shop By</span> 
                <span className="gradient-text">
                    Category
                </span>
            </span>
            <Masonry></Masonry>

        </section>
    )
}