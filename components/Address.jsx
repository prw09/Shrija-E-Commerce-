import { Place, Send } from "@mui/icons-material"
import styled from "styled-components"

const Container=styled.div`
   height: 50%;
   background-color :aliceblue ;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`

const Title=styled.h1`
    font-size: 40px;
    margin-bottom: 10px;
   
`
const Desc=styled.p`
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`


const InputContainer=styled.div`
    width: 50%;
    margin-bottom: 70px;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`

const Input=styled.input`
    border: none;
    flex: 8;
`


const Button=styled.button`
flex: 1;
background-color: black;
color: whitesmoke;
`

const Address = () => {
  return (
    <Container>
        <Title>SHRIJA</Title>
        
        <Desc>   
            <Place/> KK LIFESTYLE SOCIETY NAGPUR
        </Desc>
        <InputContainer>
            <Input placeholder="your email"/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
        
    </Container>
  )
}

export default Address;