import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  color: ${props => (props.primary ? "#FF4500" : "#999289")};
  margin-bottom: ${props => (props.primary ? "1rem" : "0")};
`;

const Wrapper = styled.header`
  ${"" /* padding: 4em;
  background: papayawhip; */};
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Pocket</Title>
        <Title primary>Pomodoro</Title>
      </Wrapper>
    );
  }
}

export default Header;
