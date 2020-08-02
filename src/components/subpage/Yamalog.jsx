import React from 'react';
import display from "../asset/img/display.png";
import styled, { keyframes } from "styled-components";
import { StyledButton } from "../asset/button";
import Fade from 'react-reveal/Fade';
import { WorksContent } from "./WorksContent";

const StyledWorkTitle = styled.h3`
    color: #717171;
    font-size: 8vh;
    padding-bottom: 0.5em;
    padding-top: 5%;
  @media only screen and (min-width: 965px) {
    font-size: 10vh;
    letter-spacing: 1vh;
    padding-top: 0;
  }
`;

const StyledSubTitle = styled.h2`
    color: #717171;
    font-size: 5vh;
    letter-spacing: 0.2vh;
  @media only screen and (min-width: 965px) {
    font-size: 7vh;
  }
`;

const StyledP = styled.p`
    color: #717171;
    width: 80%;
    margin: 0 auto;
    ${'' /* padding-bottom: 5%; */}
    line-height: 2;
    @media only screen and (min-width: 965px) {
      width: 60%;
  }
`;

const StyledDisplay = styled.img`
    width: 95%;
  @media only screen and (min-width: 965px) {
    width: 80%;
  }
`;

const StyledLang = styled.p`
  padding: 12px 20px;
  margin: 8px;
  background-color: rgba(27, 34, 50, 0.9);
  color: #fff;
  border-radius: 5px;
  font-size: 16px;
  display: inline-block;
`;

const StyledContainer = styled.div`
  padding: 8% 0;
`;

class Yamalog extends React.Component {
  onBtnClick = (e) => {
    e.preventDefault();
    this.props.history.goBack();
  };
  render() {
    return (
      <div id="subWork" >
        <StyledWorkTitle>{WorksContent.work1.title}</StyledWorkTitle>
        <StyledP>{WorksContent.work1.titleText}</StyledP>
        <hr style={{ width: "20px", margin: "3% auto" }} />
        <Fade timeout={4000}><StyledDisplay src={display} alt="workDisplay" /></Fade>
        <StyledButton href={WorksContent.work1.githubHref}>visit GitHub</StyledButton>
        <StyledButton href={WorksContent.work1.websiteHref}>visit Website</StyledButton>
        <StyledContainer>
          <StyledSubTitle>Built with</StyledSubTitle>
          {WorksContent.work1.language.map((item, index) => (
            <StyledLang variant="overline" key={index}>
              {item}
            </StyledLang>
          ))}
        </StyledContainer>
        <StyledSubTitle>Overview</StyledSubTitle>
        <StyledP>{WorksContent.work1.overview}</StyledP>
        <hr style={{ width: "20px", margin: "3% auto" }} />
        <StyledButton className="back" onClick={this.onBtnClick}>&lt;　BACK TO HOME</StyledButton>
      </div>
    )
  }
}

export default Yamalog;