import blacklist from "../images/icon-blacklist.svg";
import textSnippets from "../images/icon-text.svg";
import preview from "../images/icon-preview.svg";
import google from "../images/logo-google.png";
import ibm from "../images/logo-ibm.png";
import hp from "../images/logo-hp.png";
import microsoft from "../images/logo-microsoft.png";
import vector from "../images/logo-vector-graphics.png";

export const Section = () => {
  return (
    <section className="flex flex-col lg:px-10 px-5 gap-32">
      <div className="flex flex-col lg:flex-row  gap-10">
        <div className="flex flex-col items-center gap-5">
          <div>
            <img src={preview} alt="" />
          </div>
          <h4 className="text-2xl font-semibold text-Dark-Grayish-Blue">
            Create blacklist
          </h4>
          <p className=" text-Grayish-Blue md:w-8/12 text-center">
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </p>
        </div>

        <div className="flex flex-col items-center gap-5">
          <div>
            <img src={textSnippets} alt="" />
          </div>
          <h4 className="text-2xl font-semibold text-Dark-Grayish-Blue">
            Plain text snippets
          </h4>
          <p className=" text-Grayish-Blue  text-center">
            Remove unwanted formatting from copied text for a consistent look.
          </p>
        </div>

        <div className="flex flex-col items-center gap-5">
          <div>
            <img src={blacklist} alt="" />
          </div>
          <h4 className="text-2xl font-semibold text-Dark-Grayish-Blue">
            Sneak preview
          </h4>
          <p className=" text-Grayish-Blue   text-center">
            Quick preview of all snippets on your Clipboard for easy access.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 lg:gap-0 items-center justify-between">
        <div>
          <img src={google} alt="" />
        </div>
        <div>
          <img src={ibm} alt="" />
        </div>
        <div>
          <img src={microsoft} alt="" />
        </div>
        <div>
          <img src={hp} alt="" />
        </div>
        <div>
          <img src={vector} alt="" />
        </div>
      </div>
    </section>
  );
};
