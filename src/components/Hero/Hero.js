import React from 'react';
import { HeroSection, HeroText, HeroVideo, ButtonWrapper, HeroButton } from './HeroStyles';
import { Button, Container, MainHeading } from '../../globalStyles';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <HeroSection>
        <HeroVideo src='/assets/hero.mp4' autoPlay muted loop />
        <Container>
            <MainHeading>Your data is secure with us</MainHeading>
            <HeroText>
                We provide the best security for your data in the whole world
            </HeroText>
            <ButtonWrapper>
                <Link to="signup">
                    <Button>Get started</Button>
                </Link>
                <HeroButton>Find more</HeroButton>
            </ButtonWrapper>
        </Container>
    </HeroSection>
  )
}

export default Hero