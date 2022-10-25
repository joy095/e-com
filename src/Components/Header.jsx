import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

import Img from "../img/img3.jpg";

const Header = () => {
  function profile(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <header className="sticky flex flex-row items-center justify-between p-2 h-[60px] w-full bg-blue-500 text-white z-20">
      <div className="w-[1920px] mx-auto flex flex-row items-center justify-between">
        <div>
          <h1 className="text-2xl">Ecom</h1>
        </div>
        <div onClick={profile}>
          <Menu
            menuButton={
              <MenuButton>
                <img
                  className="h-[40px] w-[40px] object-cover rounded-full cursor-pointer hover:opacity-80 active:opacity-60"
                  src={Img}
                  alt=""
                  loading="lazy"
                />
              </MenuButton>
            }
            transition
          >
            <MenuItem>Sign in</MenuItem>
            <MenuItem>Log out</MenuItem>
            <MenuItem>Account</MenuItem>
          </Menu>
        </div>
      </div>
    </header>
  );
};
export default Header;
