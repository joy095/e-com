import Carousel from "react-grid-carousel";

const Card = () => {
  return (
    <Carousel
      responsiveLayout={[
        {
          breakpoint: 1200,
          cols: 6,
        },
        {
          breakpoint: 990,
          cols: 5,
        },
      ]}
      mobileBreakpoint={670}
      rows={1}
      loop
      cols={8}
    >
      <Carousel.Item>
        <div className="h-[315px] w-[220px] flex flex-col p-2">
          <a href="#">
            <div className="flex items-center justify-center h-[200px] p-2">
              <img
                src="https://rukminim1.flixcart.com/image/312/312/kynb6vk0/monitor/1/n/s/lf22t354fhwxxl-full-hd-22-lf22t354fhwxxl-samsung-original-imagats2rjbg9uhv.jpeg?q=70"
                alt=""
              />
            </div>
            <div className="h-[60px]">
              <p className="text-sm text-center hover:text-blue-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </a>
          <div className="h-[60px]">
            <h3 className="text-xl text-center">Price</h3>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Card;
