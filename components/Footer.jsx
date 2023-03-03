import { FacebookOutlined,  Instagram, Twitter, WhatsApp, Pinterest, Copyright, MailOutline, Phone, Place} from "@mui/icons-material"
import styled from "styled-components"

const Container=styled.div`
display: flex;
background-color:black;
color:white;
`

const Left=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Desc=styled.p`
    margin: 20px 0px;
`

const SocailContainer=styled.div`
    display: flex;
`

const SocialIcons=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center=styled.div`
flex: 1;
padding: 20px;
`

const Title=styled.h3`
   margin-bottom: 30px;
`

const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    cursor:  pointer;
`

const ListItems=styled.li`
    width: 50%;
    font-weight: 400;
    margin-bottom: 10px;
`

const Right=styled.div`
    flex: 1;
    padding: 20px;
    cursor: auto;
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Copyright />
                <Desc>
                    [name of rightsholder or rightsholders] [publication year]: e.g.  © XYZ Press and contributors 2014
                </Desc>
                <SocailContainer>
                    <SocialIcons color="385999">
                        <FacebookOutlined />
                    </SocialIcons>
                    <SocialIcons color="E4405F">
                        <Instagram />
                    </SocialIcons>
                    <SocialIcons color="55ACCE">
                        <Twitter />
                    </SocialIcons>
                    <SocialIcons color="075e54">
                        <WhatsApp />
                    </SocialIcons>
                    <SocialIcons color="E60023">
                        <Pinterest />
                    </SocialIcons>
                </SocailContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItems>Home</ListItems>
                    <ListItems>Cart</ListItems>
                    <ListItems>Man Fashion</ListItems>
                    <ListItems> Woman Fashion</ListItems>
                    <ListItems>Acessories</ListItems>
                    <ListItems>My Account</ListItems>
                    <ListItems>Order Tracking</ListItems>
                    <ListItems>Wishlist</ListItems>
                    <ListItems>Terms</ListItems>

                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Place style={{ marginRight: "10px" }} /> kk lifestyle society nagpur
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} /> contact@shrija.com
                </ContactItem>
                <Payment src='\pngegg.png' />
            </Right>

        </Container>
    )
}

export default Footer