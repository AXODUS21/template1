import React, { useState } from "react";
import { Element } from "react-scroll";
import Button from "../components/Button";
import { close, gradient, logoBannerNoBg } from "../../public/assets";
import Input from "../components/Input";

const PopUp = ({ isVisible, onClose, onFormSubmit }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user && email) {
      onFormSubmit(); // Enable video and close popup
      onClose();
    } else {
      alert("Please fill out all fields.");
    }
  };

  return isVisible ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="relative rounded-xl px-16 lg:w-[40%] h-1/2 bg-bgColor flex justify-center items-center z-20 border-2 border-secondary overflow-hidden ">
        <div className="absolute -top-12 flex justify-between w-full">
          <img src={logoBannerNoBg} height={50} width={150} />
          <button onClick={onClose} className="rounded-md pr-4">
            <div className="bg-[#FF0000] p-1 rounded-lg">
              <img src={close} width={20} className="" />
            </div>
          </button>
        </div>

        <img
          className="absolute bottom-12 -left-[40%]"
          src={gradient}
          alt="background gradient"
        />

        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          <Input title={"Name"} set={setUser} value={user} />
          <Input title={"Email"} set={setEmail} value={email} />
          <button
            className="bg-blue-500 text-white p-2 rounded z-30"
            type="submit"
          >
            Continue Watching The Video
          </button>
        </form>
      </div>
    </div>
  ) : null;
};

const Strategy = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [overlayActive, setOverlayActive] = useState(true);

  const handleFormSubmit = () => {
    setOverlayActive(false); 
  };

  return (
    <Element name="Our Strategy">
      <div className="relative">
        <img
          className="absolute -z-30 right-[-600px]"
          src={gradient}
          alt="background gradient"
        />
      </div>

      <div className="w-full h-full flex justify-center">
        <div className="w-full h-full">
          <div className="text-center mb-5 flex justify-center">
            <h2 className="header lg:w-1/2">
              How to generate 10-20 new clients every month without spending a
              single hour of time.
            </h2>
          </div>

          <div className="flex justify-center w-full h-fit relative">
            <div className="w-2/3 h-[350px] lg:h-[580px] flex justify-center mb-5 gradient-border">
              {overlayActive && (
                <div
                  className="absolute inset-0 bg-black bg-opacity-50 z-10 cursor-pointer"
                  onClick={() => setShowPopUp(true)}
                />
              )}
              <iframe
                loading="lazy"
                className="h-full w-full rounded-xl"
                src="https://www.youtube.com/embed/qRODjitiKP8?si=Wgi5pt4tk_kwoDqM"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="text-center font-bold text-xl mb-5">
            Curious to see if we're a match?
          </div>

          <div className="w-full flex justify-center mb-20">
            <div className="w-1/7">
              <Button title={"Book A Call"} />
            </div>
          </div>

          <div className="text-center header pt-10">
            Wanna know how you get clients, without the usual hassle?
          </div>
        </div>
      </div>

      <PopUp
        isVisible={showPopUp}
        onClose={() => setShowPopUp(false)}
        onFormSubmit={handleFormSubmit}
      />
    </Element>
  );
};

export default Strategy;
