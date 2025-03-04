import React from "react";
import logoDark from "../welcome/logo-light.svg";
import { quickLinks } from "../Data/navbar";
import JoinNowModal from "./JoinNowModal";
import { SiEpicgames, SiGogdotcom, SiSteam, SiX } from "react-icons/si";

function Footer() {
  return (
    <>
      <footer className="flex justify-between bg-gray-800 px-10 py-5">
        <div>
          <img src={logoDark} alt="" className="w-28" />

          <div className="py-2">
            <b>GameBlend: Game on, anytime, anywhere!</b> <br />
            Stay updated with the latest gaming news, <br />
            deals, reviews, and exclusive game picks. <br /> Join us for an
            immersive gaming experience!
          </div>
        </div>
        <div className="hidden md:block">
          <h1 className="font-bold text-xl">Contact Info</h1>
          <div className="py-5">
            <p className="">
              <b>Address: </b> 240 Muldoon Rd, Anchorage,
              <br />
              Alaska PIN Code 99504
            </p>
            <p className="py-1">
              <b>Phone: </b> +1 (907) 338-3233
            </p>
            <p className="py-1">
              <b>Email: </b> info@gameblend.com
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <h1 className="font-bold text-xl">Quick Links</h1>
          <ul className="text-center">
            {quickLinks.map((item, index) => (
              <li key={index} className="py-2 border-b border-gray-500">
                <a href={item.link} className="capitalize">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-between mb3">
          <h1 className="font-bold text-xl">Talk To Us</h1>
          <JoinNowModal text="Contact Us" cn="" />
          <div className="flex items-center gap-3 text-xl">
            <a
              href="https://x.com/"
              className="hover:bg-black p-1 rounded transition-all duration-500"
            >
              <SiX />
            </a>
            <a
              href="https://store.steampowered.com/"
              className="hover:bg-black p-1 rounded transition-all duration-500"
            >
              <SiSteam />
            </a>
            <a
              href="https://www.gog.com/en/games"
              className="hover:bg-black p-1 rounded transition-all duration-500"
            >
              <SiGogdotcom />
            </a>
            <a
              href="https://store.epicgames.com/"
              className="hover:bg-black p-1 rounded transition-all duration-500"
            >
              <SiEpicgames />
            </a>
          </div>
        </div>
      </footer>
      <div className="text-center py-4 mx-20 border-t border-gray-600">
        All Rights are owned By.{" "}
        <a href="https://avesent.com" className="text-yellow-400 font-bold">
          Avesent
        </a>
      </div>
    </>
  );
}

export default Footer;
