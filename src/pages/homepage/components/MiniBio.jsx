import React from "react";
import { IoSparkles } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi";
import "./MiniBio.scss"

const sparkles = [
  {
    sparkle: <HiSparkles style={{ color: "#262853" }} />,
    style: {
      top: "20%", left: "20%",
      animationDuration: "3s"
    }
  },
  {
    sparkle: <HiSparkles style={{ color: "#051929" }} />,
    style: {
      top: "70%", right: "20%",
      animationDelay: "200ms", animationDuration: "3.5s",
    }
  },
  {
    sparkle: <IoSparkles style={{ color: "#171718" }} />,
    style: {
      top: "10%", right: "15%",
      animationDelay: "500ms", animationDuration: "4s",
    }
  },
  {
    sparkle: <IoSparkles style={{ color: "#171718" }} />,
    style: {
      bottom: "10%", left: "20%",
      animationDelay: "50ms", animationDuration: "5s",
    }
  }
]

const MiniBio = () => {
  return (
    <div className="content-container">

      {/* All the sparkles */}
      {sparkles.map((data) =>
        <div className="sparkle" style={data.style}>
          {data.sparkle}
        </div>
      )}

      { /** Personal information */}
      <div className="aboutme">
        <div className="title">
          <h1>About Me</h1>
        </div>
        <div className="text">
          <p>
            Hello! On the internet I appear under the name
            <span className="k-word"> biggy</span>, as a
            <span className="k-word"> 20</span> years old
            Fullstack developer <span className="k-word">&&</span> software
            engineering student.
          </p>
          <p>
            I'm incredibly passionate about coding and
            my personal favorite technology is <span className="k-word"> .NET</span>,
            although I love learning about new languages and technologies!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiniBio;
