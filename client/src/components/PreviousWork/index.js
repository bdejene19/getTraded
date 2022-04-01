import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../../pages/Home";
export default function PreviousWork() {
  const [sliderXValue, setSliderXValue] = useState(-100);
  const imgs = [
    "https://thehustle.co/wp-content/uploads/2017/10/obamalaugh-1024x538.jpg",
    "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg",
    "https://reallifeglobal.com/wp-content/uploads/2013/11/lol.jpeg",
  ];

  useEffect(() => {
    const slideShowImgs = document.querySelectorAll(".slideshow-imgs");
    const slideDots = document.querySelectorAll("li");

    let slider = setInterval(() => {
      slideShowImgs.forEach((slide, index) => {
        slide.style.transform = `translateX(${sliderXValue}%)`;
        slide.style.transition = `ease-in-out 0.5s `;
        if (sliderXValue / -100 === index) {
          slideDots[index].className = "active";
        } else {
          slideDots[index].className = "inactive";
        }
      });

      let convertedIndex = sliderXValue / -100;
      if (convertedIndex === imgs.length - 1) {
        setSliderXValue(0);
      } else {
        setSliderXValue(sliderXValue - 100);
        console.log(sliderXValue);
      }
    }, 3000);

    return () => {
      clearInterval(slider);
    };
  }, [sliderXValue]);
  return (
    <Container id="previousWork-section">
      <h3>Previous work</h3>

      <PreviousWorkWrapper id="slideshowImgs-wrapper">
        {imgs.map((item, index) => (
          <CarouselImg
            key={index}
            src={item}
            className="slideshow-imgs"
          ></CarouselImg>
        ))}
      </PreviousWorkWrapper>
      <ul className="dots-container">
        {imgs.map((item, index) =>
          index === 0 ? (
            <li
              className="active"
              onClick={() => setSliderXValue(index * -100)}
            ></li>
          ) : (
            <li
              className="inactive"
              onClick={() => setSliderXValue(index * -100)}
            ></li>
          )
        )}
      </ul>
    </Container>
  );
}
const CarouselImg = styled.img`
  width: 50vw;
  height: 50vh;
`;
const PreviousWorkWrapper = styled.article`
  display: flex;
  flex-direction: row;
  /* padding: 3em; */
  box-shadow: 0 3px 3px black;
  overflow: hidden;
  width: 50vw;
  align-self: center;
  h3 {
    width: 80vw;
  }
`;
