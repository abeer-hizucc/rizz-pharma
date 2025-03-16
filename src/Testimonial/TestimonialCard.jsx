import { FaQuoteLeft } from "react-icons/fa";
import rating_full from "../assets/star-stroke-rizz-full.png";
import rating_empty from "../assets/star-stroke-rizz-empty.png";

export default function TestimonialCard({ quote, ratings, image, name, designation }) {
    const totalNoOfRating = 5;

    return (
        <div className="flex flex-col justify-between h-96 w-80 p-4 rounded-xl backdrop-blur-lg text-white bg-[rgba(255,255,255,0.05)]">
            <FaQuoteLeft className="w-6 h-6 text-white mb-2" />
            <blockquote className="w-full flex justify-center text-center">
                <p className="text-base font-[200]">{quote}</p>
            </blockquote>
            <div className="w-full flex flex-row space-x-1 justify-center mt-3">
                {Array.from({ length: ratings }).map((_, index) => (
                    <img key={index} src={rating_full} className="w-6 h-6" alt="full star" />
                ))}
                {Array.from({ length: totalNoOfRating - ratings }).map((_, index) => (
                    <img key={index} src={rating_empty} className="w-6 h-6" alt="empty star" />
                ))}
            </div>
            <div className="w-full flex flex-row space-x-5 justify-center mt-4">
                <img src={image} className="w-10 h-10 rounded-full object-cover" alt={name} />
                <div className="flex flex-col">
                    <p className="text-base font-bold">{name}</p>
                    <p className="text-sm text-neutral-400">{designation}</p>
                </div>
            </div>
        </div>
    );
}
