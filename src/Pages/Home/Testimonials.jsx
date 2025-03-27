import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";

const dummyReviews = [
  {
    image_url: "dummy1.jpg",
    customer_name: "John Doe",
    rating: 5,
    feedback: "Excellent service! Highly recommend.",
  },
  {
    image_url: "dummy2.jpg",
    customer_name: "Jane Smith",
    rating: 4,
    feedback: "Very professional and efficient!",
  },
  {
    image_url: "dummy3.jpg",
    customer_name: "Alex Johnson",
    rating: 5,
    feedback: "Great experience. Will come back again.",
  },
];

const Testimonials = () => {
  return (
    <section className="max-container bg-blue-50 py-24 w-full text-gray-700 transition-opacity duration-700 ease-in-out opacity-100 hover:opacity-90">
      <h3 className="font-palanquin text-center text-2xl md:text-4xl font-bold">
        What Our
        <span className="m-2 bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          Customers
        </span>
        Say?
      </h3>
      <p className="info-text text-md md:text-lg text-center m-auto mt-4 max-w-lg">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <Swiper
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full max-w-xl mx-auto mb-12 mt-6"
      >
        {dummyReviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="w-full bg-gray-100 rounded-lg text-center"
          >
            <ReviewCard
              imgURL={`https://example.com/images/${review.image_url}`} // Replace with actual image path
              customerName={review.customer_name}
              rating={review.rating}
              feedback={review.feedback}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
