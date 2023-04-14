import React, { useEffect, useState } from "react";

import "./start.css";
import logo from "./img/niceice.png";
import { Link, useNavigate } from "react-router-dom";

export function StartPage() {
  const navigate = useNavigate();
  //   const [currentIndex, setCurrentIndex] = useState(0);
  //   const [images, setImages] = useState([
  //     "https://pbs.twimg.com/media/FtbUYcyXwAA35-J?format=jpg&name=small",
  //     "https://pbs.twimg.com/media/FtbVVHjXoAAQRiQ?format=jpg&name=small",
  //     "https://pbs.twimg.com/media/FtbVX29WAAEokHe?format=jpg&name=small",
  //     "https://pbs.twimg.com/media/FtbVbTOWcAET3JT?format=jpg&name=small",
  //     "https://pbs.twimg.com/media/FtbVsZbWAAISqjk?format=jpg&name=small",
  //     "https://pbs.twimg.com/media/FtbVeb0XoAIHbkH?format=jpg&name=small",
  //     "https://pbs.twimg.com/media/FtbVjCuWwAE03Jo?format=jpg&name=small",
  //     "https://pbs.twimg.com/media/FtbVm3QXoAQSOyI?format=jpg&name=small",
  //   ]);
  //   useEffect(() => {
  //     let intervalID = setInterval(() => {
  //       console.log(currentIndex, currentIndex === images.length - 1);
  //       if (currentIndex + 1 === images.length) {
  //         clearInterval(intervalID);
  //       } else {
  //         setCurrentIndex(currentIndex + 1);
  //       }
  //     }, 50);

  //     return () => {
  //       clearInterval(intervalID);
  //     };
  //   });
  return (
    <div className="bg">
      <div className="container-2">
        <div className="header">
          <div className="logo-web">
            <img style={{ width: "120px" }} src={logo} alt="" />
          </div>

          <div className="main-content">
            <div className="wrapper-right">
              <div className="text">
                <h1 className="animated-text">
                  Writing <span style={{ color: "#9ED9E4" }}>NICE</span> code is
                  important for becoming a{" "}
                  <span style={{ color: "#9ED9E4" }}>NICE</span> developer.
                </h1>
                <p className="disc-start">
                  NICECODE offers you a crash course in programming languages,
                  built-in tasks for each course. watch video courses and
                  upgrade with NICECODE
                </p>
                <button className="btn-start" onClick={() => navigate("/main")}>
                  Get Started >
                </button>
              </div>
            </div>
            <div className="wrapper-left">
              <div className="main-content-left">
                <div className="logo">
                  <div className="wrapper">
                    <div className="va"></div>
                    <div className="va type2">
                      <div className="content-2">
                        N
                        <img
                          className="logo-icon"
                          src="https://pbs.twimg.com/media/Ftgk1UFXwAE59Iw?format=png&name=small"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="start-box">
                      <div className="one-box">code</div>
                    </div>
                  </div>
                  <div className="tags">
                    <div className="tag">HTML5</div>
                    <div className="tag">CSS3</div>
                    <div className="tag">JS</div>
                    <div className="tag">WP</div>
                    <div className="tag">UX</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
