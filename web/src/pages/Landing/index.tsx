import React from "react";
import { FiArrowRight } from "react-icons/fi";

import { City, ContentWrapper, EnterAppButton, LandingContainer, Location, Main, Subtitle, Title } from "./styles";

import logoImg from "../../images/logo.svg";

export const Landing: React.FC = () => {
  return (
    <LandingContainer>
      <ContentWrapper>
        <img src={logoImg} alt="Happy" />

        <Main>
          <Title>Leve felicidade para o mundo</Title>
          <Subtitle>Visite orfanatos e mude o dia de muitas crianças.</Subtitle>
        </Main>

        <Location>
          <City>Águas Claras</City>
          <span>Brasília</span>
        </Location>

        <EnterAppButton to="/map">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />  
        </EnterAppButton>
      </ContentWrapper>
    </LandingContainer>
  );
};
