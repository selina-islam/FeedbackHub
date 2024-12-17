import ReviewsCard from "./ReviewCards";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/Json/Review.json")
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData));
  });
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-[90%] mx-auto py-12 md:py-24">
        <h1 className="font-extrabold text-xl sm:text-[32px] leading-10  mb-12">
          Recents avtivities
        </h1>

        <div className="">
          <Slider {...settings}>
            {data.map((items, i) => (
              <ReviewsCard key={i} items={items} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Reviews;
