import ad_bg from "../assets/Ad.png";
export default function Ad(){
    return(
        <div  className="overflow-hidden bg-transparent relative">
        <img  src={ad_bg} />
        <div className="absolute w-full h-full text-white top-0 left-0 p-4 text-2xl z-10"></div>
      </div>
    )
}