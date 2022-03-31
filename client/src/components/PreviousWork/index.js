import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../../pages/Home";
export default function PreviousWork() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imgs = [
    "https://thehustle.co/wp-content/uploads/2017/10/obamalaugh-1024x538.jpg",
    "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg",
    "https://reallifeglobal.com/wp-content/uploads/2013/11/lol.jpeg",
  ];

  return (
    <Container>
      <h3>Previous work</h3>

      <PreviousWorkWrapper>
        {imgs.map((item) => (
          <CarouselImg src={item} style={{ width: "100vw" }}></CarouselImg>
        ))}
      </PreviousWorkWrapper>
    </Container>
  );
}
const CarouselImg = styled.img`
  width: 100vw;
  max-width: 80vw;
`;
const PreviousWorkWrapper = styled.article`
  display: flex;
  flex-direction: row;
  padding: 3em;
  width: 100vw;

  h3 {
    width: 80vw;
  }
`;
