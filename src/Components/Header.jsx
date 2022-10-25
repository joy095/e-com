import Img from "../img/img3.jpg";

const Header = () => {
  return (
    <header className="sticky flex flex-row items-center justify-between p-2 h-[60px] w-full bg-blue-500 text-white">
      <div className="w-[1920px] mx-auto flex flex-row items-center justify-between">
        <div>
          <h1 className="text-2xl">Ecom</h1>
        </div>
        <div>
          <img
            className="h-[40px] w-[40px] object-cover rounded-full cursor-pointer hover:opacity-80 active:opacity-60"
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
