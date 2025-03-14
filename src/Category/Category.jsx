import './Category.scss'
export default function Category() {
    return (
        <section className="flex flex-col w-full space-y-16 max-sm:space-y-8 ">
            <span className="text-4xl font-[700] flex flex-row space-x-2 justify-center text-white">
               <span> Shop By</span> 
                <span className="gradient-text">
                    Category
                </span>
            </span>

        </section>
    )
}