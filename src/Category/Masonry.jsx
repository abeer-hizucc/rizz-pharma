
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
// const CLIENT_ID ='Ko6BV4Bj2_MnK4UrivaHQDGhs2gOZqHSXXjWduKV6Lw';

const Masonry = () => {
  //const [images, setImages] = useState([]);

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     const promises = categories.map(async (category) => {
  //       const res = await fetch(
  //         `https://api.unsplash.com/search/photos?query=${category.query}&client_id=${CLIENT_ID}`
  //       );
  //       const data = await res.json();
  //       return { title: category.title, imageUrl: data.results[3]?.urls?.regular };
  //     });
  //     const fetchedImages = await Promise.all(promises);
  //     setImages(fetchedImages);
  //   };
  
  //   fetchImages();
  // }, []);
  

  return (
    // <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
    //   {categories.map((item, index) => (
    //     <div
    //       key={index}
    //       className={`relative rounded-xl overflow-hidden ${
    //         index % 3 === 0 ? "col-span-2 row-span-1" : "col-span-1 row-span-2"
    //       }`}
    //     >
    //       <img
    //         src={item.imageUrl}
    //         alt={item.title}
    //         className="w-full h-full object-cover"
    //       />
    //       <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
    //         <h2 className="text-white font-bold text-lg">{item.title}</h2>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div className="layout-container">
    {categories.map((category, index) => (
      <div key={index} className="overflow-hidden bg-transparent relative hover:scale-110 transition ease-in-out hover:cursor-pointer">
        <img className="rounded-xl" width='300px' src={category.imageUrl} alt={category.title} />
        <div className="absolute w-full h-full text-white top-0 left-0 p-4 text-2xl z-10">{category.title}</div>
      </div>
        
    ))}
    
</div>

    
  );
};

export default Masonry;
