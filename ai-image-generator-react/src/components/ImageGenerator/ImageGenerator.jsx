import React from "react";

const ImageGenerator = () => {
  return (
    <div className="ai-image-generator flex flex-col ">
      <div className="header">
        Ai image <span>generator</span>
      </div>

      {/* IMAGE DIV */}
      {/* <div className="img-loading">
        <div className="image">
          <img src={img1} alt="" />
        </div>
      </div> */}

      {/* SEARCH BOX DIV */}
      <div className="search-box">
        <input
          type="text"
          name="text"
          id="text"
          className="search-input"
          placeholder="Describe about the type of image u desire for "
        />
        <div className="generate-btn">Generate</div>
      </div>
    </div>
  );
};

export default ImageGenerator;
