import React from "react";
import Slider from "react-slick";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const handleJoin = () => {
    toast.success("You are joined!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
    });
  };

  const slides = [
    {
      bg: "https://i.ibb.co/GvJgH5wH/46110.jpg",
      title: "Spring Garden Event",
      subtitle: "Time: March – April",
      text: `Seasonal planting for tomatoes, chillies, eggplants, marigolds, and more. 
      Learn, plant, and connect with the community.`,
    },
    {
      bg: "https://i.ibb.co/8DFcdx89/31113.jpg",
      title: "Flower Show & Competition",
      subtitle: "Time: January – February",
      text: `Showcase of roses, orchids, and more. Competitions, awards, and flower exhibitions. A treat for nature lovers.`,
    },
    {
      bg: "https://i.ibb.co/4ZjLKGkd/25357.jpg",
      title: "Organic Gardening Workshop",
      subtitle: "Time: Summer",
      text: `Learn eco-friendly techniques like composting and pesticide-free growing. Great for families and nature enthusiasts.`,
    },
  ];

  return (
    <div className="w-full mx-auto mt-2">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-[50vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            {/* Greenish Overlay */}
            <div className="absolute inset-0 bg-green-900 bg-opacity-40 z-0"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-6 gap-6 text-white">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                <h3 className="text-lg italic mb-3">{slide.subtitle}</h3>
                <p className="text-sm mb-4">{slide.text}</p>
                <button
                  onClick={handleJoin}
                  className="mt-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition duration-300"
                >
                  Join Event
                </button>
              </div>
              <img
                src="https://i.ibb.co/YBHjmQMZ/4261410.jpg"
                alt="event"
                className="w-44 h-44 object-cover rounded-md hidden md:block"
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}
