import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (!images || images.length === 0) return <p>No Images Found!!</p>;

  return (
    <div className="slide-container h-screen flex flex-col items-center bg-gray-300 w-screen pt-10">
      <h1 className="font-poppins font-semibold p-5 text-xl">Image Slider</h1>
     
      <div className="image-window max-w-2xl w-full h-96 relative overflow-hidden shadow-lg rounded-2xl">
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              loading="eager"
              src={img.src}
              alt={img.alt}
              className="object-cover w-full h-full flex-shrink-0"
            />
          ))}
        </div>
      </div>

      <div className="slide-btns flex max-w-2xl w-full justify-between pt-2 mt-1">
        <button
          onClick={prevSlide}
          className="bg-white w-24 flex justify-center rounded-lg cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white w-24 flex justify-center rounded-lg cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;