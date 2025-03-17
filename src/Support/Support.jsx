import secure_payment from '../assets/secure-payment.png';
import online_support from '../assets/online-support.png';
import free_shipping from '../assets/free-shipping.png';
import best_value from '../assets/best-value.png';
export default function Support(){
    return(
        <section id ="support">
        <ul className="px-32 max-md:px-16 max-sm:px-0 w-full py-4 msd:py-8 flex flex-row max-sm:flex-col max-sm:space-y-3 justify-between bg-[rgba(49,65,140,0.3)]">
            <li className='flex flex-row space-x-4 max-sm:justify-center'><img className ='w-7 h-7' src={secure_payment} alt="secure-payment"/><p className='text-white text-base'> Secure Payment</p></li>
            <li className='flex flex-row space-x-4 max-sm:justify-center'><img className ='w-7 h-7' src={online_support} alt="online-support"/><p className='text-white text-base'> Online Support</p></li>
            <li className='flex flex-row space-x-4 max-sm:justify-center'><img className ='w-7 h-7' src={free_shipping} alt="free-shipping" /><p className='text-white text-base'> Free Shipping</p></li>
            <li className='flex flex-row space-x-4 max-sm:justify-center'><img className ='w-7 h-7' src={best_value} alt="best-value" /><p className='text-white text-base'> Best Value</p></li>
        </ul>
        </section>
    )
    
}