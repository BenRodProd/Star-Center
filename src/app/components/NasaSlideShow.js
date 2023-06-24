import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";

const URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_KEY}`;

const Para = styled.p`
  font-family: 'time', sans-serif;
  z-index: 1;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  height: 800px;
`;

export default function NasaSlideShow() {
  const fetcher = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      // Retry fetching after 3 seconds
      await new Promise((resolve) => setTimeout(resolve, 5000));
      return fetcher(url);
    }
  };

  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (isLoading) {
    return <Container>Loading...</Container>;
  }

  if (error) {
    return null; // Return null or a default value when an error occurs
  }

  return (
    <>
      {data && (
        <>
          <StyledImage src={data.hdurl} width="860" height="600" alt="NASA" />
          <Para>{data.explanation}</Para>
          <Para>{data.date}</Para>
          <Para>{data.copyright}</Para>
        </>
      )}
    </>
  );
}
