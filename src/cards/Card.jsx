import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Card = () => {
  return (
    <div className="relative mb-2">
      <div className="absolute z-20" />
      <Carousel
        autoFocus
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <div className="box-border h-[320px] w-[210px] p-4 border-[1px] ml-2 flex flex-col">
            <a href="">
              <div className="flex flex-row items-center justify-center h-[200px]">
                <img
                  className=""
                  src="https://rukminim1.flixcart.com/image/312/312/krxtrww0/computer/e/l/c/redmibook-15-e-learning-edition-thin-and-light-laptop-redmi-original-imag5m8jkjbaybeu.jpeg?q=70"
                  alt=""
                />
              </div>
              <div className="h-[60px] flex flex-row items-center justify-center">
                <p className="text-sm hover:text-blue-700">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facilis,
                </p>
              </div>
            </a>
            <div className="h-[60px] flex flex-row items-center justify-center">
              <h3 className="text-xl">Price</h3>
            </div>
          </div>
        </div>
        <div>
          <div className="box-border h-[320px] w-[210px] p-4 border-[1px] ml-2 flex flex-col">
            <a href="">
              <div className="flex flex-row items-center justify-center h-[200px]">
                <img
                  className=""
                  src="https://rukminim1.flixcart.com/image/312/312/krxtrww0/computer/e/l/c/redmibook-15-e-learning-edition-thin-and-light-laptop-redmi-original-imag5m8jkjbaybeu.jpeg?q=70"
                  alt=""
                />
              </div>
              <div className="h-[60px] flex flex-row items-center justify-center">
                <p className="text-sm hover:text-blue-700">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facilis,
                </p>
              </div>
            </a>
            <div className="h-[60px] flex flex-row items-center justify-center">
              <h3 className="text-xl">Price</h3>
            </div>
          </div>
        </div>
        <div>
          <div className="box-border h-[320px] w-[210px] p-4 border-[1px] ml-2 flex flex-col">
            <a href="">
              <div className="flex flex-row items-center justify-center h-[200px]">
                <img
                  className=""
                  src="https://rukminim1.flixcart.com/image/312/312/krxtrww0/computer/e/l/c/redmibook-15-e-learning-edition-thin-and-light-laptop-redmi-original-imag5m8jkjbaybeu.jpeg?q=70"
                  alt=""
                />
              </div>
              <div className="h-[60px] flex flex-row items-center justify-center">
                <p className="text-sm hover:text-blue-700">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facilis,
                </p>
              </div>
            </a>
            <div className="h-[60px] flex flex-row items-center justify-center">
              <h3 className="text-xl">Price</h3>
            </div>
          </div>
        </div>
        <div>
          <div className="box-border h-[320px] w-[210px] p-4 border-[1px] ml-2 flex flex-col">
            <a href="">
              <div className="flex flex-row items-center justify-center h-[200px]">
                <img
                  className=""
                  src="https://rukminim1.flixcart.com/image/312/312/krxtrww0/computer/e/l/c/redmibook-15-e-learning-edition-thin-and-light-laptop-redmi-original-imag5m8jkjbaybeu.jpeg?q=70"
                  alt=""
                />
              </div>
              <div className="h-[60px] flex flex-row items-center justify-center">
                <p className="text-sm hover:text-blue-700">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facilis,
                </p>
              </div>
            </a>
            <div className="h-[60px] flex flex-row items-center justify-center">
              <h3 className="text-xl">Price</h3>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Card;
