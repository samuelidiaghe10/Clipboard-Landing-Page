import logo from "../images/logo.svg";

export const Header = () => {
  return (
    <header className="flex lg:px-10 px-5 flex-col items-center  gap-10 ">
      <div>
        <img src={logo} alt="" />
      </div>

      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-center text-Dark-Grayish-Blue text-4xl lg:text-5xl font-semibold">
          A history of everything you copy
        </h1>

        <p className=" text-center font-medium md:w-7/12 text-Grayish-Blue">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </div>

      <div className="flex lg:flex-row flex-col items-center gap-10">
        <button className=" duration-500 font-semibold tracking-wider bg-Strong-Cyan ios text-white py-3 lg:px-7 px-20 rounded-full">
          Download for iOS
        </button>
        <button className=" duration-500 font-semibold tracking-wider bg-Light-Blue text-white py-3 lg:px-7 px-20 mac  rounded-full">
          Download for Mac
        </button>
      </div>
    </header>
  );
};
