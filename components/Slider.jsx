import { ArrowLeftOutlined, ArrowRightOutlined, Description } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
 
const Container = styled.div`
    width: 100%;
    height: 100vh; 
    display: flex;
    position: relative;
    /* background-color : #2d7ec9;  */
    overflow: hidden;
    
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === 'left' && '10px'};
    right: ${props=> props.direction === 'rigth' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 1;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props)=>props.slideIndex * -100}vw);
`
const Slide= styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`
const ImageContainer= styled.div`
height: 80%;
flex: 1;                                                
`
const Image= styled.img`
 height: 100%;
 padding: 5px;
 object-fit: cover;

`
const InfoContainer= styled.div`
flex: 1;
padding: 50px;

`
const Ttile=styled.h1`
font-size: 50px;
`
const Desc=styled.p`
margin: 50px 0px;
font-size: 18px;
font-weight: 500;
letter-spacing: 3px;
align-items: center;
`
const Button=styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
corsor: pointer;
`


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
          setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
          setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
  return (
    <Container>
        <Arrow direction='left' onClick={()=>handleClick('left')}>
            <ArrowLeftOutlined />
        </Arrow>
            <Wrapper slideIndex={slideIndex}>
               {sliderItems.map((items) =>(
                <Slide bg={items.bg} key={items.id}>
                    <ImageContainer>
                        <Image src={items.img} />
                    </ImageContainer>
                    <InfoContainer>
                        <Ttile>{items.title}</Ttile>
                        <Desc>{items.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                ))} 
            </Wrapper>
        <Arrow direction='rigth' onClick={()=>handleClick('rigth')}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  

  );
}

export default Slider;

