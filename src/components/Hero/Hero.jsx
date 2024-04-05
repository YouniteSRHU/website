import React from "react";
import "./Hero.css";

const Hero = () => {
  const slider = document.querySelector(".hero-slider");

  const activate = (e) => {
    const items = document.querySelectorAll(".hero-item");
    
    e.target.matches(".next") && slider.append(items[0]);
    console.log("items");
    e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
  }

  document.addEventListener("click", activate, false);
  return (
    <section id="home-carousel">
      <ul className="hero-slider">
        <li
          className="hero-item"
          style={{
            backgroundImage:
              "url(https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg)",
          }}
        >
          <div className="hero-content">
            <h2 className="hero-title">"Lossless Youths"</h2>
            <p className="hero-description">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.{" "}
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          className="hero-item"
          style={{
            backgroundImage: "url(https://i.redd.it/tc0aqpv92pn21.jpg)",
          }}
        >
          <div className="hero-content">
            <h2 className="hero-title">"Estrange Bond"</h2>
            <p className="hero-description">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.{" "}
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          className="hero-item"
          style={{
            backgroundImage:
              "url(https://wharferj.files.wordpress.com/2015/11/bio_north.jpg)",
          }}
        >
          <div className="hero-content">
            <h2 className="hero-title">"The Gate Keeper"</h2>
            <p className="hero-description">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.{" "}
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          className="hero-item"
          style={{
            backgroundImage:
              "url(https://images7.alphacoders.com/878/878663.jpg)",
          }}
        >
          <div className="hero-content">
            <h2 className="hero-title">"Last Trace Of Us"</h2>
            <p className="hero-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          className="hero-item"
          style={{
            backgroundImage:
              "url(https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg)",
          }}
        >
          <div className="hero-content">
            <h2 className="hero-title">"Urban Decay"</h2>
            <p className="hero-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          className="hero-item"
          style={{
            backgroundImage:
              "url(https://da.se/app/uploads/2015/09/simon-december1994.jpg)",
          }}
        >
          <div className="hero-content">
            <h2 className="hero-title">"The Migration"</h2>
            <p className="hero-description">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.{" "}
            </p>
            <button>Read More</button>
          </div>
        </li>
      </ul>
      <nav className="hero-nav">
        <button
          className="hero-btn prev"
        ></button>
        <button
          className="hero-btn next"
        ></button>
      </nav>
    </section>
  );
};

export default Hero;
