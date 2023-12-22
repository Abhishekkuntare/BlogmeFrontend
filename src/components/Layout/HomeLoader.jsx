import React from "react";
import "./ani.css";

const HomeLoader = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <img
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
          }}
          src="https://cdn.dribbble.com/users/26516/screenshots/2001849/media/71f595bfe2a4648f97944d1e7db82cad.gif"
          alt=""
        />
      </div>
    </>
  );
};

export default HomeLoader;
