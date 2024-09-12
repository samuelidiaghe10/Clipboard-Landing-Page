export const Aside = () => {
  return (
    <aside className="flex flex-col justify-center lg:px-10 px-5 items-center gap-7">
      <h1 className="text-4xl text-center  text-Dark-Grayish-Blue font-semibold">
        Clipboard for iOS and Mac OS
      </h1>

      <p className=" text-Grayish-Blue text-center md:w-8/12 lg::w-5/12">
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you're ready to start adding to your clipboard.
      </p>

      <div className="flex lg:flex-row flex-col items-center gap-10">
        <button className=" duration-500 font-semibold tracking-wider bg-Strong-Cyan ios text-white py-3 lg:px-7 px-20 rounded-full">
          Download for iOS
        </button>
        <button className=" duration-500 font-semibold tracking-wider bg-Light-Blue text-white py-3 lg:px-7 px-20 mac  rounded-full">
          Download for Mac
        </button>
      </div>
    </aside>
  );
};
