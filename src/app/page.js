"use client"

import styled,{ keyframes} from 'styled-components'
import VideoBackground from './components/VideoBackground'
import ISSTracker from './components/ISS'
import {  useEffect, useState } from 'react'
import Iss from './components/3dISS'
import EarthComponent from './components/EarthComponent'
import { useScrollYPosition } from 'react-use-scroll-position'
import NasaSlideShow from './components/NasaSlideShow'
import MarsSlideshow from './components/MarsWeather'
import { UniverseText, EarthText, ISSText, MoonText, SunText, MarsText, UniversumText, ErdeText, GerISSText, MondText, SonneText, GerMarsText } from './texts/texts'
import Mars from './components/Mars'
import Image from 'next/image'
import Link from 'next/link'
import Astronaut from './components/Astronaut'
import MoonLanding from './components/MoonLanding'

const zoomIn = keyframes`
  0% {
    transform: translateX(-100%) rotateY(-130deg);
  
  }
  100% {
    transform: translateX(0px) rotateY(0deg);
  }
    
  `
  const zoomInFromRight = keyframes`
  0% {
    transform: translateX(100%) rotateY(130deg);
  
  }
  100% {
    transform: translateX(0px) rotateY(0deg);
  }
    
  `
const zoomOut = keyframes`
0% {
 
  transform: translateX(0px) rotateY(0deg);
}
100% {
  transform: translateX(100%) rotateY(130deg);
}
  
`
const zoomOutToLeft = keyframes`
0% {
 
  transform: translateX(0px) rotateY(0deg);
}
100% {
  transform: translateX(-100%) rotateY(-130deg);
}
  
`
const Card = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

    border: 1px solid white;
color:white;
text-align: center;
text-shadow: 0 0 20px white;
  box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.5);
  background: rgba( 255, 255, 255, 0.05 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 7.5px );
-webkit-backdrop-filter: blur( 7.5px );
border-radius: 20px;
z-index:1;

width:80%;
height:100%;
margin:2rem;
padding:1rem;
margin-bottom: 4rem;
`
const NasaCard = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

    border: 1px solid white;
color:white;
text-align: center;
text-shadow: 0 0 20px white;
  box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.5);
  background: rgba( 255, 255, 255, 0.05 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 7.5px );
-webkit-backdrop-filter: blur( 7.5px );
border-radius: 20px;
z-index:1;

width:80%;
margin:2rem;
padding:1rem;
margin-bottom: 4rem;


`
const Footer = styled.footer`
display:flex;
  position:fixed;
  bottom: 0;
  width:100%;
flex-direction: row;
justify-content: space-between;
align-items: space-between;
font-size: 1rem;
left:50%;
transform: translateX(-50%);
margin:auto;
text-align: center;
text-shadow: 0 0 20px white;
  box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.5);
  background: rgba( 255, 255, 255, 0.05 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 7.5px );
-webkit-backdrop-filter: blur( 7.5px );


`
const MoonLandingWrapper = styled.div`
display:flex;

justify-content: center;

width:30vw;

z-index: 10;
`
const AstronautMover = keyframes`
0% {
  transform:translateY(-150%) translateX(-120%)
  
}
50% {
  transform:translateY(150%) translateX(120%)
}
100% {
  transform:translateY(-150%) translateX(-120%)
}
`
const AstronautWrapper = styled.div`
display:flex;
position:absolute;
height: 30%;
width:30%;
animation: ${AstronautMover} 2300s infinite linear;
z-index:4;
`

const LanguageChoice = styled.div`
display:flex;
position: relative;
justify-content: center;
align-items:center;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 5%;
margin:auto;

`

const Card1 = styled(Card)`
margin-top:4rem;
animation: ${({ cardInFocus, scrollDirection, lockCard }) =>
 
    (cardInFocus === '1' && scrollDirection === 'down' && !lockCard) 
    ? zoomIn
    : (cardInFocus === '1' && scrollDirection === 'up' && !lockCard)
    ? zoomInFromRight
    : (cardInFocus === '2' && scrollDirection === 'down' && !lockCard) 
    ? zoomOut
    
      : 'none'}
      1s ease-in-out;
  transform: ${({ cardInFocus }) => (cardInFocus === '1' ? 'translateX(0)' : 'translateX(200%)')};
`;

const Card2 = styled(Card)`

animation: ${({ cardInFocus, scrollDirection, lockCard  }) =>
    (cardInFocus === '2' && scrollDirection === 'down' && !lockCard)
    ? zoomIn
    : (cardInFocus === '2' && scrollDirection === 'up' && !lockCard)
    ? zoomInFromRight
    : (cardInFocus === '3' && scrollDirection === 'down' && !lockCard)
    ? zoomOut
    : (cardInFocus === '1' && scrollDirection === 'up' && !lockCard)
      ? zoomOutToLeft
      : 'none'}
       1s ease-in-out;
       transform: ${({ cardInFocus }) =>
    cardInFocus === '2' ? 'translateX(0)' : 'translateX(200%)'};
`;

const Card3 = styled(Card)`

animation: ${({ cardInFocus, scrollDirection, lockCard  }) =>
    (cardInFocus === '3' && scrollDirection === 'down' && !lockCard)
    ? zoomIn
    : (cardInFocus === '3' && scrollDirection === 'up' && !lockCard)
    ? zoomInFromRight
    : (cardInFocus === '4' && scrollDirection === 'down' && !lockCard)
    ? zoomOut
    : (cardInFocus === '2' && scrollDirection === 'up' && !lockCard)
    ? zoomOutToLeft
    : 'none'}
       1s ease-in-out;
  transform: ${({ cardInFocus }) =>
    cardInFocus === '3' ? 'translateX(0)' : 'translateX(200%)'};
`;

const Card4 = styled(Card)`
  animation: ${({ cardInFocus, scrollDirection, lockCard  }) =>
    (cardInFocus === '4' && scrollDirection === 'down' && !lockCard)
      ? zoomIn
      : (cardInFocus === '4' && scrollDirection === 'up' && !lockCard)
      ? zoomInFromRight
      : (cardInFocus === '5' && scrollDirection === 'down' && !lockCard)
      ? zoomOut
      : (cardInFocus === '3' && scrollDirection === 'up' && !lockCard)
      ? zoomOutToLeft
      : 'none'}
       1s ease-in-out;
       
       transform: ${({ cardInFocus }) =>
    cardInFocus === '4' ? 'translateX(0)' : 'translateX(200%)'};
`;

const Card5 = styled(Card)`

animation: ${({ cardInFocus, scrollDirection, lockCard  }) =>
    (cardInFocus === '5' && scrollDirection === 'down' && !lockCard)
    ? zoomIn
    : (cardInFocus === '5' && scrollDirection === 'up' && !lockCard)
      ? zoomInFromRight
      : (cardInFocus === '6' && scrollDirection === 'down' && !lockCard)
      ? zoomOut
      : (cardInFocus === '4' && scrollDirection === 'up' && !lockCard)
      ? zoomOutToLeft
      : 'none'}
       1s ease-in-out;
  transform: ${({ cardInFocus }) =>
    cardInFocus === '5' ? 'translateX(0)' : 'translateX(200%)'};
`;

const Card6 = styled(Card)`

animation: ${({ cardInFocus, scrollDirection, lockCard  }) =>
    (cardInFocus === '6' && scrollDirection === 'down' && !lockCard)
    ? zoomIn
    : (cardInFocus === '6' && scrollDirection === 'up' && !lockCard)
    ? zoomInFromRight
    : (cardInFocus === '7' && scrollDirection === 'down' && !lockCard)
    ? zoomOut
    : (cardInFocus === '5' && scrollDirection === 'up' && !lockCard)
    ? zoomOutToLeft
    : 'none'}
       1s ease-in-out;
       transform: ${({ cardInFocus }) =>
    cardInFocus === '6' ? 'translateX(0)' : 'translateX(200%)'};
`;

const Card7 = styled(Card)`
 
 animation: ${({ cardInFocus, scrollDirection, lockCard  }) =>
    (cardInFocus === '7' && scrollDirection === 'down' && !lockCard)
      ? zoomIn
      : (cardInFocus === '7' && scrollDirection === 'up' && !lockCard)
      ? zoomInFromRight
      : (cardInFocus === '8' && scrollDirection === 'down' && !lockCard)
      ? zoomOut
      : (cardInFocus === '6' && scrollDirection === 'up' && !lockCard)
      ? zoomOutToLeft
      : 'none'}
       1s ease-in-out;
       transform: ${({ cardInFocus }) =>
    cardInFocus === '7' ? 'translateX(0)' : 'translateX(200%)'};
`;

const Main = styled.div`
display:flex;
position:relative;
flex-direction:column;
align-items:center;
justify-content:center;
z-index:-5;
width:100vw;
margin-left:1rem;
overflow:hidden;
scroll-behavior: smooth;

`


const Header = styled.h2 `
font-family: 'astro', sans-serif;
z-index: 1;
`

const Para = styled.p`
font-family: 'time', sans-serif;
z-index: 1;
`
const CopyRight = styled(Link)`
display: inline-block;
text-align: center;
white-space: nowrap;
text-decoration: none;
color:white;
font-family: 'astro', sans-serif;
`

const ISSAni = keyframes`
0% {
  z-index:3;
  transform: translateX(-180%) translateY(0);
}
25% {
  z-index:3;
  transform: translateX(100%) translateY(200%)
}
50% {
  transform: translateX(180%)translateY(400%); 
  z-index:0;
}
75% {
  transform: translateX(-100%) translateY(200%);
  z-index:0;
}
100% {
  transform: translateX(-180%) translateY(0);;
  z-index:3;
}`
const MarsAni = keyframes`
0% {

  transform: translateX(-180px) translateY(0);
}
25% {

  transform: translateX(100px) translateY(200px)
}
50% {
  transform: translateX(180px)translateY(400px); 
 
}
75% {
  transform: translateX(-100px) translateY(200px);

}
100% {
  transform: translateX(-180px) translateY(0);;

}`
const IssWrapper = styled.div`
position:absolute;
top:15%;
width: 30%;

animation: ${ISSAni} 40s ease-in-out infinite;
`



const EarthWrapper = styled.div`
position:absolute;
z-index:0;
width:100%;
height:100%;
top: ${props => props.isMobile ? '250px' : '-37%'};
left: 50%;
transform: translateX(-50%);
margin:auto;
padding:0;
aspect-ratio: 1 / 1;
overflow:hidden;
`
const MarsWrapper = styled.div`
display:flex;
position:absolute;
z-index:4;
width:100%;
height:100%;
top: 40%;
left: 0%;
transform: translateX(-50%);
margin:auto;
padding:0;
animation: ${MarsAni} 240s ease-in-out infinite;
aspect-ratio: 1 / 1;
overflow:hidden;
`
const Navigation = styled.div`
display:flex;
position: fixed;
flex-wrap:wrap;
left: ${props => props.isMobile ? '50%' : '0'};
width:${props => props.isMobile ? '100%' : '10%'};
height:${props => props.isMobile ? '' : '100%'};
transform: ${props => props.isMobile ? 'translate(-50%)' : 'none'};
top:0;
text-align: center;
flex-direction: ${props => props.isMobile ? 'row' : 'column'};
gap: 18px;
align-items: center;
justify-content: space-evenly;
text-shadow: 0 0 20px white;
  box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.8);
  background: rgba( 255, 255, 255, 0.05 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.8 );
backdrop-filter: blur( 17.5px );
-webkit-backdrop-filter: blur( 17.5px );
`
const Flag = styled(Image)`
filter: ${props => props.chosen === 'true' ? 'saturate(1)' : 'saturate(0)'};

`
const StyledLink = styled.div`


text-decoration: none;
color:white;


font-size: 1rem;
font-family: 'astro', sans-serif;
`


export default function Home() {
  const [cardInFocus, setCardInFocus] = useState('1')
  const [chosenLanguage, setChosenLanguage] = useState('english')
  const [scrollDirection, setScrollDirection] = useState('down')
  const [lockCard, setLockCard] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isMobileSize, setIsMobileSize] = useState(false)
  const scrollY = useScrollYPosition();
  
  useEffect (() => {
    
    setIsMobileSize(window.innerWidth <= 768)


  } , [])



  useEffect(() => {
    const handleScroll = () => {
      if (window) {
        setScrollDirection(window.scrollY > scrollY ? 'down' : 'up');
      }

    };
    const handleResize = () => {
      if (window) {
        setIsMobileSize(window.innerWidth <= 768)

      }
    }
    if (window) {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize)
    }
    return () => {
      if (window) {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize)
      }
    };
  }, [scrollY]);
  useEffect(() => {

   // let maxScrollY;
  
 //   if (isMobileSize) {
  //    maxScrollY = 3000;
  //  } else {
  //    maxScrollY = 4400;
  //  }
  
  const scrollY = window.scrollY || window.pageYOffset;
  const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollY / maxScrollY) * 100;
  
  console.log(scrollPercent);
  
  if (scrollPercent <= 5) {
    setCardInFocus('1');
  } else if (scrollPercent > 5 && scrollPercent <= 12) {
    setCardInFocus('2');
  } else if (scrollPercent > 12 && scrollPercent <= 24) {
    setCardInFocus('3');
  } else if (scrollPercent > 24 && scrollPercent <= 40) {
    setCardInFocus('4');
  } else if (scrollPercent > 40 && scrollPercent <= 60) {
    setCardInFocus('5');
  } else if (scrollPercent > 60 && scrollPercent <= 83) {
    setCardInFocus('6');
  } else if (scrollPercent > 83 && scrollPercent <= 100) {
    setCardInFocus('7');
  }
  
  }, [scrollY, isMobileSize]);
  useEffect(() => {
    setLockCard(false)
    setTimeout(() => {
      
      setLockCard(true)
    }, 1000);
  }, [cardInFocus])
  
 useEffect(() => {
    setTimeout(() => {
      
      setIsLoading(false)
    }, 100);
 },[])

 function scrolling(number) {
  const cards = document.querySelectorAll('.card');
  const targetCard = cards[number - 1];
  const cardOffsetTop = targetCard.offsetTop;
  const cardHeaderHeight = targetCard.querySelector('.card-header').offsetHeight;
  const scrollPosition = cardOffsetTop - cardHeaderHeight;

  window.scrollTo({
    top: scrollPosition-50,
    behavior: 'smooth',
  });
}


  




if (isLoading) {
  return (
    <Main>
      <VideoBackground videoSrc="/solarsystem.mp4" />
    </Main>
  )
}

  return (
    <>
      <Navigation isMobile={isMobileSize}>
        
        <StyledLink onClick={()=> scrolling(1)}>{chosenLanguage==='english' ? 'Universe' : 'Universum'}</StyledLink>
 
        <StyledLink onClick={()=> scrolling(2)}>{chosenLanguage==='english' ? 'Earth' : 'Erde'}</StyledLink>

        <StyledLink onClick={()=> scrolling(3)}>ISS</StyledLink>

        <StyledLink onClick={()=> scrolling(4)}>NASA POTD</StyledLink>

        <StyledLink onClick={()=> scrolling(5)}>{chosenLanguage==='english' ? 'Our Moon' : 'Unser Mond'}</StyledLink>

        <StyledLink onClick={()=> scrolling(6)}>{chosenLanguage==='english' ? 'Our Sun' : 'Unsere Sonne'}</StyledLink>

        <StyledLink onClick={()=> scrolling(7)}>Mars</StyledLink>

       

      </Navigation>
    <Main isMobile = {isMobileSize}>
 <VideoBackground videoSrc="/solarsystem.mp4" />
 <AstronautWrapper>
 <Astronaut />
 </AstronautWrapper>
 <Card1 className="card" id="universe" scrollDirection={scrollDirection} lockCard={lockCard} cardInFocus={cardInFocus} ><Header className="card-header">{chosenLanguage==='english' ? 'THE UNIVERSE' : 'DAS UNIVERSUM'}</Header>
  <Para>{chosenLanguage==='english' ? UniverseText : UniversumText}</Para></Card1>
  <Card2 className="card" id='earth' scrollDirection={scrollDirection} cardInFocus={cardInFocus} lockCard={lockCard}><Header className="card-header">{chosenLanguage==='english' ? 'THE EARTH' : 'DIE ERDE'}</Header>
  <Para>{chosenLanguage==='english' ? EarthText: ErdeText}</Para></Card2>
    <EarthWrapper isMobileSize={isMobileSize}>
    <EarthComponent/>
    </EarthWrapper>
    <div id="iss"></div>
  <Card3 className="card" id='iss' scrollDirection={scrollDirection} cardInFocus={cardInFocus} lockCard={lockCard}><Header className="card-header">{chosenLanguage==='english' ? 'THE ISS' : 'DIE ISS'}</Header>
  <Para>{chosenLanguage==='english' ? ISSText : GerISSText}</Para></Card3>
    <Card4  scrollDirection={scrollDirection} cardInFocus={cardInFocus} lockCard={lockCard}>
      <Header>{chosenLanguage==='english' ? 'CURRENT POSITION OF THE ISS' : 'LIVE TRACKER DER ISS'}</Header>
      <ISSTracker />
    </Card4>
  
      <IssWrapper>
        <Iss />
        </IssWrapper>
      <NasaCard className="card" isMobile={isMobileSize} id="NasaPOTD" >
          <Header className="card-header">NASA Picture of the Day</Header>
     <NasaSlideShow/>
     </NasaCard>
     <Card5 className="card" scrollDirection={scrollDirection} cardInFocus={cardInFocus} lockCard={lockCard}>
    
    <Header className="card-header">{chosenLanguage==='english' ? 'OUR MOON' : 'UNSER MOND'}</Header>
  <Para>{chosenLanguage==='english' ? MoonText : MondText}</Para>
  </Card5>
  <Card >
    <MoonLandingWrapper>
    <MoonLanding />
    </MoonLandingWrapper>
  </Card>
  <Card6 className="card" scrollDirection={scrollDirection} cardInFocus={cardInFocus} lockCard={lockCard}>
    
    <Header className="card-header">{chosenLanguage==='english' ? 'OUR SUN' : 'UNSERE SONNE'}</Header>
  <Para>{chosenLanguage === 'english' ? SunText : SonneText}</Para>
  </Card6>
  <MarsWrapper>
    <Mars />
    </MarsWrapper>
  <Card7 className="card" scrollDirection={scrollDirection} cardInFocus={cardInFocus} lockCard={lockCard}>
    <Header className="card-header">Mars</Header>
  <Para>{chosenLanguage==='english' ? MarsText : GerMarsText}</Para>
  </Card7>
  <Card>
    <Header>{chosenLanguage==='english' ? 'PICTURES FROM MARS' : 'BILDER VOM MARS'}</Header>
    <Para>{chosenLanguage==='english' ? 'Taken by Curiosity' : 'Aufgenommen von Curiosity'}</Para>
    <MarsSlideshow />
    </Card>
    </Main>
    <Footer> 
          <LanguageChoice>
          <Flag chosen={chosenLanguage==='german' ? 'true' : 'false'} onClick={()=> setChosenLanguage('german')} src = "/german.png" height= "30" width= "80" alt="german"></Flag>
          <CopyRight href="http://www.benrodprod.com">(c) 2023 BenRodProd</CopyRight>
          <Flag chosen={chosenLanguage==='english' ? 'true' : 'false'} onClick={()=> setChosenLanguage('english')} src = "/english.png" height="30" width= "80" alt="english"></Flag>
        </LanguageChoice></Footer>
    </>
  )
}
