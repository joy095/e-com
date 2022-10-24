import Img from "../img/img3.jpg";

const Header = () => {
  return (
    <header className="sticky flex flex-row items-center justify-between p-2 h-[60px] border-b-2 w-full">
      <div className="w-[1920px] mx-auto flex flex-row items-center justify-between">
        <div>
          <h1 className="text-2xl">Ecom</h1>
        </div>
        <div>
          <img
            className="h-[40px] w-[40px] object-cover rounded-full cursor-pointer hover:opacity-90 active:opacity-80"
            src={Img}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
