import { useState } from "react";
import logo from "../assets/images/logo.png";
import Button from "./Button";

const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(true);
  return (
    <div className="navbarTop">
      <img src={logo} alt="" />
      {menuStatus && (
        <ul className="text-gray menu-list">
          <li>Explore</li>
          <li>Discover</li>
          <li>For Professionals</li>
          <li>
            <i className="fa fa-ellipsis"></i>
          </li>
          <li>
            <Button
              className="secondary-border-color bg-none text-gray"
              text="Submit Photos"
            />
          </li>
          <li>|</li>
          <li>
            <Button
              className="bg-none border-none text-gray"
              text="Login"
            ></Button>
          </li>
          <li>
            <Button
              className="primary-bg-color primary-border-color text-white"
              text="Join Free"
            ></Button>
          </li>
        </ul>
      )}
      <button
        onClick={() => setMenuStatus(!menuStatus)}
        className="btn secondary-border-color bg-none menu-toggle"
      >
        <i className="fa fa-bars"></i>
      </button>
    </div>
  );
};

export default Navbar;
