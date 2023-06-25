import { useEffect } from "react";

export default function MoonLanding() {


  return (
    <video id="video-apollo"  autoPlay muted loop style={{width:"60vw"}} >
      <source src="./apollo11.mp4" type="video/mp4" />
    </video>
  );
}