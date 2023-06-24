import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";

const Para = styled.p`
  font-family: 'time', sans-serif;
  z-index: 1;
`;
const Container = styled.div`
  display: flex;
  position:relative;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  
`;

const Empty = styled.div`
  width: 70vw;
  height: 400px;
`;

const ImageContainer = styled.div`
position:relative;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 2s ease;
 width:50vw;
 height:400px;
 
  
`

const StyledImage = styled(Image)`
display:flex;
width:100%;
    position: absolute;
    top:0;
    left:0;
 
  object-fit: Cover;

`;

export default function MarsSlideshow() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const [currentDate, setCurrentDate] = useState(generateRandomDate());


  const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${currentDate}&api_key=${process.env.NASA_KEY}`;

  const { data: currentData, error: currentError } = useSWR(URL, fetcher);

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showNextImage, setShowNextImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(generateRandomDate());
      setShowNextImage(true);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showNextImage) {
      setTimeout(() => {
        setShowNextImage(false);
        setCurrentPhotoIndex((prevIndex) => prevIndex + 1);
      }, 1500);
    }
  }, [showNextImage]);

  function generateRandomDate() {
    const startDate = new Date("2019-01-01").getTime();
    const endDate = new Date("2020-12-31").getTime();
    const randomTime = Math.random() * (endDate - startDate) + startDate;
    const randomDate = new Date(randomTime);
    const year = randomDate.getFullYear();
    let month = randomDate.getMonth() + 1;
    let day = randomDate.getDate();
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    return `${year}-${month}-${day}`;
  }

  if (currentError || !currentData || !currentData.photos || currentPhotoIndex >= currentData.photos.length) {
    return (
      <Container>
        <Empty />
        <Para>Loading...</Para>
      </Container>
    );
  }

  return (
    <Container>
      <ImageContainer visible={!showNextImage}>
        <StyledImage
          key={currentData.photos[currentPhotoIndex].id}
          src={currentData.photos[currentPhotoIndex].img_src}
          alt={currentData.photos[currentPhotoIndex].id}
          fill={true}
          sizes={"70vw"}
        />
      </ImageContainer>
      <Para>{currentData.photos[currentPhotoIndex].earth_date}</Para>
    </Container>
  );
}
