import  styled  from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color  : #7abce2 ;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: 14px;
  font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over 500
    </Container>
  )
}

export default Announcement;