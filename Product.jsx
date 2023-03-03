import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"
import Address from "../components/Address"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Container=styled.div``

const Wrapper=styled.div`
padding: 50px;
display: flex;
`

const ImageContainer=styled.div`
flex: 1;
`

const Image=styled.img`
width: 100%;
height: auto;
object-fit: cover;
`

const InfoContainer=styled.div`
flex: 1;
padding: 0px 50px;

`

const Title=styled.h1`
  font-weight: 350;
`

const Desc=styled.p``

const Price=styled.span`
font-weight: 200;
font-size: 40px;
`
const FilterConatiner=styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`
const Filter=styled.div`
display: flex;
align-items: center;
`
const FilterTitle=styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor=styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`
const FilterSize=styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption=styled.option``

const AddContainer=styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`

const AmountContainer=styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount=styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`

const Button=styled.button`
  padding: 15px;
  margin: 20px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`


const Product = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <ImageContainer>
                <Image src="WhatsApp Image 2022-10-29 at 00.31.35.jpeg"/>
            </ImageContainer>
            <InfoContainer>
              <Title>Designer Dress</Title>
              <Desc>Designer dress with classic designs and comfort</Desc>
              <Price>$500</Price>
              <FilterConatiner>
                <Filter>
                  <FilterTitle>Color</FilterTitle>
                  <FilterColor color="Blue"/>
                  <FilterColor color="Black"/>
                  <FilterColor color="Gray"/>
                  </Filter>
                  <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                  </Filter>
              </FilterConatiner>
              <AddContainer>
                <AmountContainer>
                  <Remove/>
                  <Amount>
                        1
                  </Amount>
                  <Add/>
                  <Button>ADD TO CART</Button>
                </AmountContainer>
              </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Address/>
        <Footer/>
    </Container>
  )
}

export default Product