import React, { useRef, useState } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";

// Dummy Data (Expertise Areas for an Asset Management and Insurance Firm)
const expertiseData = [
  {
    id: 1,
    image: "https://via.placeholder.com/200", // Replace with actual image URL
    title: "Wealth Management",
    description:
      "Expert financial planning to help grow and protect your assets.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/200",
    title: "Risk Assessment",
    description: "Comprehensive risk analysis to safeguard your investments.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/200",
    title: "Retirement Planning",
    description: "Personalized retirement solutions for financial security.",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/200",
    title: "Insurance Solutions",
    description: "Tailored insurance plans to secure your family’s future.",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/200",
    title: "Investment Advisory",
    description: "Strategic investment guidance to maximize your wealth.",
  },
];

function Expertise() {
  const [expertise, setExpertise] = useState(expertiseData);
  const carouselContainer = useRef(null);

  const navigate = (direction) => {
    if (!carouselContainer.current) return;
    const container = carouselContainer.current;
    const scrollAmount =
      direction === "left"
        ? container.scrollLeft - (container.offsetWidth - 250)
        : container.scrollLeft + (container.offsetWidth - 250);

    container.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative w-full my-20">
      <ContentWrapper className="relative">
        {/* Navigation Arrows */}
        <IoMdArrowBack
          className="absolute left-6 top-[50%] transform -translate-y-1/2 bg-white p-4 w-14 h-14 rounded-full shadow-lg text-black cursor-pointer z-10 hidden md:block hover:scale-110 transition-all"
          onClick={() => navigate("left")}
        />
        <IoMdArrowForward
          className="absolute right-6 top-[50%] transform -translate-y-1/2 bg-white p-4 w-14 h-14 rounded-full shadow-lg text-black cursor-pointer z-10 hidden md:block hover:scale-110 transition-all"
          onClick={() => navigate("right")}
        />

        {/* Title */}
        <h3 className="text-center text-2xl md:text-4xl font-bold font-palanquin my-10">
          Our Areas of
          <span className="bg-gradient-to-r m-2 from-blue-600 to-blue-900 text-transparent bg-clip-text">
            Expertise
          </span>
        </h3>

        {/* Expertise Carousel */}
        <div
          className="carouselItems flex gap-6 py-4 overflow-x-auto scroll-smooth scrollbar-hide"
          ref={carouselContainer}
        >
          {expertise.map((item) => (
            <div
              key={item.id}
              className="w-[250px] shrink-0 bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 p-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h4 className="text-lg font-semibold mt-4">{item.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </ContentWrapper>
    </div>
  );
}

export default Expertise;
