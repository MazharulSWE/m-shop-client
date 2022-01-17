import React from 'react';
import styled from 'styled-components';
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import { mobile } from "../responsive";

  // ****************style start from here****************

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
    background-color: whitesmoke;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

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
        <Logo>🛒WELLNESS-SHOP🛒</Logo>
        <Desc>
         Wellness-shop is a merchandise shop where UPSI student will find different kind of day to day products in a cheap price and student can buy from the system.Coping effectively with life and creating satisfying relationship's is the main goal of wellness-center.
        </Desc>
        <SocialContainer>
          <SocialIcon to="/https://www.facebook.com/profile.php?id=100064160199304" color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Ground floor, Block 7, Faculty Of Human Development,UPSI,Perak,Malaysia. 
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> 01548797724/7725
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> wellness@fpm.upsi.edu.my
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
        </Container>
    );
};

export default Footer;