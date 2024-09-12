import computer from "../images/image-computer.png";
import devices from "../images/image-devices.png";

export const Main = () => {
  return (
    <main className="flex flex-col gap-40 px-5 lg:pe-10">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-5 items-center">
          <h3 className="text-3xl text-center font-semibold text-Dark-Grayish-Blue">
            Keep track of your snippets
          </h3>
          <p className=" text-center md:w-8/12 lg::w-6/12 text-Grayish-Blue font-medium">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will your organize everything.
          </p>
        </div>

        <div className="flex lg:flex-row flex-col gap-20 lg:gap-0 justify-between items-center">
          <div className="wrap">
            <img
              className="computer lg:m-[0px_0px_0px_-40px]"
              src={computer}
              alt=""
            />
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex items-center lg:items-start flex-col gap-3">
              <h4 className="text-2xl text-center lg:text-start font-semibold text-Dark-Grayish-Blue">
                Quick Search
              </h4>
              <p className="text-Grayish-Blue text-center w-[20rem] lg:text-start font-medium lg:w-[21rem]">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>

            <div className="flex items-center lg:items-start flex-col gap-3">
              <h4 className="text-2xl text-center lg:text-start font-semibold text-Dark-Grayish-Blue">
                iCloud Sync
              </h4>
              <p className="text-Grayish-Blue text-center w-[19rem] lg:text-start font-medium lg:w-[21rem]">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>

            <div className="flex items-center lg:items-start flex-col gap-3">
              <h4 className="text-2xl font-semibold text-center lg:text-start text-Dark-Grayish-Blue">
                Complete History
              </h4>
              <p className="text-Grayish-Blue text-center lg:text-start font-medium w-[19rem] lg:w-[21rem]">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col gap-5 items-center">
          <h3 className="text-3xl font-semibold text-center text-Dark-Grayish-Blue ">
            Access Clipboard Anywhere
          </h3>
          <p className="text-Grayish-Blue md:w-9/12 font-medium text-center">
            Whether you're on the go, or at the computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
        </div>

        <div>
          <img src={devices} alt="" />
        </div>

        <div className="flex flex-col items-center text-center gap-5">
          <h3 className="text-3xl text-Dark-Grayish-Blue font-semibold">
            Supercharge your workflow
          </h3>

          <p className="text-Grayish-Blue font-medium">
            We've got the tools to boost your productivity
          </p>
        </div>
      </div>
    </main>
  );
};
