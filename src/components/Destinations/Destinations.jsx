import React from "react";
import "./Destination.css";
import UniCard from "../UniversityCard/UniCard";
import "react-multi-carousel/lib/styles.css";
import useEmblaCarousel from "embla-carousel-react";

const Destinations = () => {
  let [tcount, setTcount] = React.useState(0);
  let [count, setCount] = React.useState(1);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  React.useEffect(() => {
    if (emblaApi) {
      setTcount(emblaApi.slideNodes().length);
      console.log(emblaApi.slideNodes().length); // Access API
    }
  }, [emblaApi]);

  React.useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      if (count > 1) {
        setCount(--count);
      }
    }
  }, [emblaApi, count]);

  const scrollNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
      if (count < tcount) {
        setCount(++count);
      }
    }
  };
  return (
    <div className="destination-container">
      <div className="destination-wrapper">
        <p className="destination-heading">Our Destinations</p>
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              <UniCard
                name={"Oxford University"}
                image={"/assets/images/card-image-1.png"}
                address={"Oxford, England"}
              />
              <UniCard
                name={"Oxford University"}
                image={"/assets/images/card-image-2.png"}
                address={"Oxford, England"}
              />
              <UniCard
                name={"Oxford University"}
                image={"/assets/images/card-image-1.png"}
                address={"Oxford, England"}
              />
              <UniCard
                name={"Oxford University"}
                image={"/assets/images/card-image-1.png"}
                address={"Oxford, England"}
              />
              <UniCard
                name={"Oxford University"}
                image={"/assets/images/card-image-1.png"}
                address={"Oxford, England"}
              />
              <UniCard
                name={"Oxford University"}
                image={"/assets/images/card-image-1.png"}
                address={"Oxford, England"}
              />
              <UniCard
                name={"Oxford University"}
                image={"/assets/images/card-image-1.png"}
                address={"Oxford, England"}
              />
              <UniCard
                name={"Oxford University"}
                image={"/assets/images/card-image-1.png"}
                address={"Oxford, England"}
              />
              <UniCard
                name={"Oxford University"}
                image={"/assets/images/card-image-1.png"}
                address={"Oxford, England"}
              />
              <UniCard
                name={"Oxford University"}
                image={"/assets/images/card-image-1.png"}
                address={"Oxford, England"}
              />
              <UniCard
                name={"Oxford University"}
                image={"/assets/images/card-image-1.png"}
                address={"Oxford, England"}
              />
              <UniCard
                name={"Oxford University"}
                image={"/assets/images/card-image-1.png"}
                address={"Oxford, England"}
              />
            </div>
          </div>
        </div>
        <div className="navigation">
          <button className="embla__prev nav-btn" onClick={scrollPrev}>
            <img src="/assets/images/leftArrow.png" alt="" />
          </button>
          <p
            className="curr-count"
            style={{
              color: "#262626",
              fontFamily: "Inter",
              fontSize: "32px",
              fontWeight: "600",
              lineHeight: "30px",
            }}
          >
            {count}
            <span
              style={{
                color: "#7D7D7D",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "30px",
              }}
            >
              /{tcount}
            </span>
          </p>
          <button className="embla__next nav-btn" onClick={scrollNext}>
            <img src="/assets/images/rightArrow.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
