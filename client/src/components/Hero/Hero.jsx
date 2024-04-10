import React, { useState, useCallback, useEffect } from "react";
import HeroItem from "../HeroItem/HeroItem";
import "./Hero.css";


const Hero = () => {
  const [sliderItems, setSliderItems] = useState([
    {
      title: "Lossless Youths",
      description: "Lorem ipsum, dolor sit amet...",
      imageUrl: "https://i.redd.it/tc0aqpv92pn21.jpg",
    },
    {
      title: "",
      description: "",
      imageUrl: "/YouniteLogoAnimation.gif",
    },
    {
      title: "The Gate Keeper",
      description: "Lorem ipsum, dolor sit amet...",
      imageUrl: "https://wharferj.files.wordpress.com/2015/11/bio_north.jpg",
    },
    {
      title: "LUrban Decay",
      description: "Lorem ipsum, dolor sit amet...",
      imageUrl: "https://images7.alphacoders.com/878/878663.jpg",
    },
    {
      title: "The Migration",
      description: "Lorem ipsum, dolor sit amet...",
      imageUrl: "https://da.se/app/uploads/2015/09/simon-december1994.jpg",
    },
  ]);

  const handleSliderNavigation = useCallback(
    (e) => {
      if (e.target.matches(".next")) {
        setSliderItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
      }
      if (e.target.matches(".prev")) {
        setSliderItems((prevItems) => [
          prevItems[prevItems.length - 1],
          ...prevItems.slice(0, prevItems.length - 1),
        ]);
      }
    },
    []
  );

  const rotateItems = useCallback(() => {
    setSliderItems((prevItems) => [
      ...prevItems.slice(1),
      prevItems[0],
    ]);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(rotateItems, 10000); // Rotate every 3 seconds

    return () => {
      clearInterval(intervalId); // Clean up the interval
    };
  }, [rotateItems]);

  const handleItemClick = useCallback(
    (index) => {
      console.log(index)
      const updatedItems = [...sliderItems];
      const clickedItem = updatedItems.splice(index, 1)[0];
      updatedItems.splice(1, 0, clickedItem)
      setSliderItems(updatedItems);
      
    },
    [sliderItems]
  );

  return (
    <section id="home-carousel">
      <ul className="hero-slider">
        {sliderItems.map((item, index) => (
          <HeroItem
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </ul>
      <nav className="hero-nav">
        <button
          className="hero-btn prev"
          onClick={handleSliderNavigation}
        >⏮️</button>
        <button
          className="hero-btn next"
          onClick={handleSliderNavigation}
        >⏭️</button>
      </nav>
    </section>
  );
};

export default Hero;
