import React from "react";
import { IoSparkles } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi";
import "./MiniBio.scss"

const sparkles = [
  {
    sparkle: <HiSparkles style={{ color: "#262853" }} />,
    parentStyle: {
      top: "20%", left: "20%",
      animationDuration: "3s"
    }
  },
  {
    sparkle: <HiSparkles style={{ color: "#051929" }} />,
    parentStyle: {
      top: "70%", right: "20%",
      animationDelay: "200ms", animationDuration: "3.5s",
    }
  },
  {
    sparkle: <IoSparkles style={{ color: "#171718" }} />,
    parentStyle: {
      top: "10%", right: "15%",
      animationDelay: "500ms", animationDuration: "4s",
    }
  },
  {
    sparkle: <IoSparkles style={{ color: "#171718" }} />,
    parentStyle: {
      bottom: "10%", left: "20%",
      animationDelay: "50ms", animationDuration: "5s",
    }
  }
]

const MiniBio = () => {
  return (
    <div className="content-container">

      {/* All the sparkles */}
      {sparkles.map((data, index) =>
        <div className="sparkle" style={data.parentStyle} key={`sparkle${index}`}>
          {data.sparkle}
        </div>
      )}

      { /** Personal information */}
      <div className="minibio">
        <div className="title">
          <h1>About Me</h1>
        </div>
        <div className="text">
          <p>
            Hello! On the internet I appear under the name
            <span className="highlighter"> biggy</span>, as a
            <span className="highlighter"> 20</span> years old
            Fullstack developer <span className="highlighter">&&</span> software
            engineering student.
          </p>
          <p>
            I'm incredibly passionate about coding and
            my personal favorite technology is <span className="highlighter"> .NET</span>,
            although I love learning about new languages and technologies!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiniBio;
