import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
import logo from "../images/logo.svg";

export const Footer = () => {
  return (
    <footer className="flex lg:flex-row flex-col gap-10 lg:gap-0 bg-slate-200 py-5 px-10 items-center justify-between">
      <div className="flex lg:flex-row flex-col items-center gap-5 lg:gap-20">
        <div>
          <img className="w-[70px]" src={logo} alt="" />
        </div>

        <div className="flex lg:flex-row flex-col gap-5 lg:gap-10">
          <ul className="flex lg:text-start text-center flex-col gap-5">
            <li>
              <a
                className="font-semibold text-Dark-Grayish-Blue hover:text-Strong-Cyan duration-300"
                href="#"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-Dark-Grayish-Blue hover:text-Strong-Cyan duration-300"
                href="#"
              >
                Contact Us
              </a>
            </li>
          </ul>

          <ul className="flex lg:text-start text-center flex-col gap-5">
            <li>
              <a
                className="font-semibold text-Dark-Grayish-Blue hover:text-Strong-Cyan duration-300"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="font-semibold text-Dark-Grayish-Blue hover:text-Strong-Cyan duration-300"
                href="#"
              >
                Press Kit
              </a>
            </li>
          </ul>

          <ul className="flex flex-col gap-5">
            <li>
              <a
                className="font-semibold text-Dark-Grayish-Blue hover:text-Strong-Cyan duration-300"
                href="#"
              >
                Install Guide
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex gap-10">
        <BiLogoFacebook className=" text-3xl text-Dark-Grayish-Blue hover:text-Strong-Cyan duration-500" />
        <BiLogoTwitter className="text-3xl text-Dark-Grayish-Blue hover:text-Strong-Cyan duration-500" />
        <BiLogoInstagram className="text-3xl text-Dark-Grayish-Blue hover:text-Strong-Cyan duration-500" />
      </div>
    </footer>
  );
};
