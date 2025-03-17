
import { images } from "./Images_backup";
import './Masonry.scss';
const categories = [
  { title: "Weight Loss", imageUrl:images[0] },
  { title: "Sexual Health", imageUrl:images[1]},
  { title: "Brain Health", imageUrl:images[2] },
  { title: "Testosterone HRT", imageUrl:images[3] },
  { title: "Athletic Performance", imageUrl:images[4]},
  { title: "Beauty and Hair Loss", imageUrl:images[5]},
];

const Masonry = () => {
  
  return (
    
    <div className="layout-container">
    {categories.map((category, index) => (
      <div key={index} className="overflow-hidden bg-transparent relative hover:scale-105 transition ease-in-out hover:z-20 hover:cursor-pointer">
        <img className="rounded-xl" width='370px' src={category.imageUrl} alt={category.title} />
        <div className="absolute w-[50px] h-full font-[500] text-white top-0 left-0 p-4  text-2xl md:text-4xl z-10">{category.title}</div>
      </div>
        
    ))}
    
</div>

    
  );
};

export default Masonry;
