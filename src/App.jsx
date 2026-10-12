import React, { useRef } from "react";
import html2canvas from "html2canvas";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contents from "./components/Contents";
import Wrapper from "./components/Wrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCamera } from "react-icons/fa";

function App() {
  const targetRef = useRef(null);

  const handleCapture = () => {
    if (targetRef.current) {
      const divToExclude = document.getElementById("fixedDiv");
      divToExclude.style.display = "none";
      setTimeout(() => {
        html2canvas(targetRef.current).then((canvas) => {
          const imageUrl = canvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.href = imageUrl;
          link.download = "snapshot.png";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
        divToExclude.style.display = "flex";
      }, 100);
    }
  };

  return (
    <div ref={targetRef}>
      <div id="fixedDiv" onClick={handleCapture}>
        <FaCamera size="24" />
        Capture and Download screenshot
      </div>
      <Header />
      <Wrapper>
        <Contents />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
