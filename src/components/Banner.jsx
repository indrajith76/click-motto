import React from "react";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-text">
        <h2>
          Your local source of high quality images
          <br />
          and videos directly from their creators
        </h2>
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search photos and videos"
          />
          <p>
            <strong>Recommended: </strong>summer, food, covid-19, real estate,
            love
          </p>
        </div>
        <span>
          Photo of the Day <strong>John Doe</strong>
        </span>
      </div>
    </section>
  );
};

export default Banner;
