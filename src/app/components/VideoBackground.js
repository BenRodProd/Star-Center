
import { useEffect } from 'react';
import styled from 'styled-components';

const Background = styled.video`
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
object-fit:cover;
z-index: -5;

`
export default function VideoBackground({ videoSrc }) {
  useEffect(() => {
    const videoElement = document.getElementById('video-background');
   
  
    videoElement.play();
  }, []);

  return (
    <video id="video-background"  autoPlay muted loop style={{ opacity: "0.5", filter: "saturate(1.5)",position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}