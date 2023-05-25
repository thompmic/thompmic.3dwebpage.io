import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display:flex;
  align-items:center;
  gap: 60px;
`;

const Logo = styled.img`
  height:50px;
`;

const List = styled.ul`
  display:flex;
  gap:20px;
  list-style:none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor:pointer;
`;

const Icon = styled.img`
  width: 20px;
  cursor:pointer;
`;

const Icons = styled.div`
  display:flex;
  align-items:center;
  gap: 20px;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: pink;
  color: white;
  border: none;
  boorder-radius: 5px;
  cursor: pointer;
  
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
        <Logo src="./img/af.png"/>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Works</ListItem>
          <ListItem>Contact</ListItem>
        </List>
        </Links>
        <Icons>
          <Icon src="./img/search1.png"/>
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;