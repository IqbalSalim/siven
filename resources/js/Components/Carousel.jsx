import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <div className="relative w-full overflow-hidden border border-gray-200 rounded lg:w-1/2">
        <div
          className="flex w-full transition-transform duration-500 ease-out h-[80vh]"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 text-gray-800 rounded-full shadow hover:text-white bg-white/80 hover:bg-sky-600"
          >
            <ChevronLeftIcon className="w-8 h-8" />
          </button>
          <button
            onClick={next}
            className="p-1 text-gray-800 rounded-full shadow hover:text-white bg-white/80 hover:bg-sky-600"
          >
            <ChevronRightIcon className="w-8 h-8 " />
          </button>
        </div>
        <div className="absolute left-0 right-0 bottom-4">
          <div className="flex items-center justify-center gap-2">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${
                  curr === i ? "p-0.5" : "bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
