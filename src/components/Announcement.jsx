import React from 'react';
import styled from 'styled-components';

// style components 
const Container = styled.div`
    height: 30px;
    background-color: tomato;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
`;

const Announcement = () => {
    return (
        <Container>
            🎉🎁💐💐SUPER OFFER IS COMING FOR OUR GRAND OPENING.STAY TOUCHED WITH US.....💐💐🎉🎁
        </Container>
    );
};

export default Announcement;