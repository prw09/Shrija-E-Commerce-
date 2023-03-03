import { FavoriteBorder, NotificationsActiveRounded, SearchSharp  } from '@mui/icons-material'
import {   LocalMallTwoTone } from '@mui/icons-material'
import styled from 'styled-components'
import {mobile} from '../responsive'


const Container = styled.div`
    height: 80px;
    background-color: black;
    color: white;
    ${mobile({height:"50px"})}
       
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({padding:"10px"})}
`
const Left= styled.div`
    flex:1;
    display: flex;
    align-items: center;  
    `

const Logo = styled.h1`
    
    font-style: Helvetica;
    text-align: center;
`



const Rigth= styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
`

const MenuItems=styled.div`
    font-size: 15px;
    cursor: pointer;
    font-weight: 400;
    margin-left: 25px;
`

const Navbar = () => {
  return (
     <Container>
        <Wrapper>
        <Left>
        <Logo>SHRIJA.</Logo>
        </Left>
       
        <Rigth>
            <MenuItems><SearchSharp/></MenuItems>
            <MenuItems><NotificationsActiveRounded/></MenuItems>
            <MenuItems><FavoriteBorder/></MenuItems>
            <MenuItems><LocalMallTwoTone /></MenuItems>
          
        </Rigth>   
        </Wrapper>
     </Container>
     
    )
}

export default Navbar;