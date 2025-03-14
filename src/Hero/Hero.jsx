import Header from "../Header/Header";
import './Hero.scss';
import SearchBar from "./SearchBar";
export default function Hero() {
    return (
        <div>
            <Header/>
            <section className="flex flex-col w-full space-y-16 max-sm:space-y-8">
            <div className='flex flex-col py-10 w-[45%] md:w-[40%] space-y-5'>
                <h1 className='text-3xl md:text-4xl lg:text-6xl font-[700] text-[#FAF8F2]'>Prescription Treatments For Your <h1 className="text-3xl md:text-4xl lg:text-6xl font-[700] text-[#ECC974]">Health Goals</h1></h1>
                <button className ="gradient-button">Find My Treatment</button>
            
            </div>
                <div className="w-full flex justify-center">
                    <SearchBar />
                </div>
            </section>
           
        </div>
    )
}   