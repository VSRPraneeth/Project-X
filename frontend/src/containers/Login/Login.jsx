import React from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import share from "../../assets/share.mp4";
import logo from "../../assets/logowhite.png";
import jwt_decode from "jwt-decode";
import { client } from "../../utils/client";

const Login = () => {
  const navigate = useNavigate();
  const googleResponse = (response) => {
    const decodedResponse = jwt_decode(response.credential);
    localStorage.setItem("user", response.credential);
    console.log({ response, decodedResponse });
    const doc = {
      _id: decodedResponse.sub,
      _type: "user",
      userName: decodedResponse.name,
      image: decodedResponse.picture,
    };

    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={share}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>
          <div className="shadow-2xl">
            <GoogleLogin
              onSuccess={googleResponse}
              onError={googleResponse}
              // render={(renderProps) => (
              // <button
              //   type="button"
              //   className="bg-mainColor"
              // >
              //   <FcGoogle />
              //   </button>
              // )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
