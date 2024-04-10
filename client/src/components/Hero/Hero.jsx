import React, { useState, useCallback, useEffect } from "react";
import HeroItem from "../HeroItem/HeroItem";
import "./Hero.css";


const Hero = () => {
  const [sliderItems, setSliderItems] = useState([
    {
      title: "Younite",
      description: "A dynamic student ecosystem in Swami Rama Himalayan University",
      url: "/about-us",
      id: "animated-gif",
    },
    {
      title: "AdhUnique",
      description: "AdhUnique'24: The SRHU YouthFest",
      url: "/youthfest",
      id: "one",
    },
    {
      title: "Code Storm 202",
      description: "Code, Create, Conquer: The Ultimate Hackathon",
      url: "/youthfest",
      id: "two",
    },
    {
      title: "Fish Tank",
      description: "From Pitch to Rich: The battlefield of pioneers",
      url: "/youthfest",
      id: "three",
    },
    // {
    //   title: "The Migration",
    //   description: "Lorem ipsum, dolor sit amet...",
    //   url: "https://da.se/app/uploads/2015/09/simon-december1994.jpg",
    //   id: "four",
    // },
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
    const intervalId = setInterval(rotateItems, 1000000); // Rotate every 3 seconds

    return () => {
      clearInterval(intervalId); // Clean up the interval
    };
  }, [rotateItems]);

  // const handleItemClick = useCallback(
  //   (index) => {
  //     console.log(index)
  //     const updatedItems = [...sliderItems];
  //     const clickedItem = updatedItems.splice(index, 1)[0];
  //     updatedItems.splice(1, 0, clickedItem);
  //     setSliderItems(updatedItems);
      
  //   },
  //   [sliderItems]
  // );
  const handleItemClick = useCallback(
    (index) => {
      console.log(index);
      const updatedItems = [...sliderItems]; // Create a copy of the sliderItems array
  
      // Handle edge cases (clicked item is already first or last)
      if (index === 0) {
        return; // No need to swap if clicked item is already first
      } else if (index === updatedItems.length - 1) {
        // Move clicked item (last) to first and first item to second
        [updatedItems[0], updatedItems[index]] = [updatedItems[index], updatedItems[0]];
      } else {
        // General case (clicked item is somewhere in the middle)
        // Move clicked item (index) to first and first item to last
        const clickedItem = updatedItems.splice(index, 1)[0];
        updatedItems.push(updatedItems.shift()); // Move first item to last
        updatedItems.unshift(clickedItem); // Insert clicked item at first position
      }
  
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
            url={item.url}
            id={item.id}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </ul>
      {/* <nav className="hero-nav">
        <button
          className="hero-btn prev"
          onClick={handleSliderNavigation}
        >⏮️</button>
        <button
          className="hero-btn next"
          onClick={handleSliderNavigation}
        >⏭️</button>
      </nav> */}
    </section>
  );
};

export default Hero;
