import ad_bg from "../assets/Ad.png";
import arrow from "../assets/arrow.png";
export default function Ad() {
    return (
        <section id ="ad" className="overflow-hidden bg-transparent relative">
            <img  className= 'w-full' src={ad_bg} />
            <div className="absolute w-full h-full text-white top-0 left-0 p-4 text-2xl z-10">
                <div className="flex flex-col md:flex-row max-md:space-y-8 justify-between max-sm:p-1 p-[5%]">
                    <h1 className="text-2xl md:text-4xl">100% Online,<br />100% Convinient</h1>
                    <ul className="text-sm md:text-base list-inside space-y-2">
                        <li className="flex flex-row items-center space-x-4">
                            <img src={arrow} className="w-3 h-3" />
                            <p>Chat with provider, 24/7</p></li>
                        <li className="flex flex-row items-center space-x-4">
                            <img src={arrow} className="w-3 h-3" />
                            <p>Fast, Disscreet Shipping</p>
                        </li>
                        <li className="flex flex-row items-center space-x-4">
                            <img src={arrow} className="w-3 h-3" />
                            <p>
                                Clinically proven ingredients and FDA-approved treatments
                            </p>

                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}