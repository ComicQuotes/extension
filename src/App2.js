import React from "react";
import { ThemeProvider } from "styled-components";

import Button from "./components/Button";
import Background from "./components/Background";
import HeaderText from "./components/HeaderText";
import Wrapper from "./components/Wrapper";
import Content from "./components/Content";
import Nav from "./components/Nav";
import QuoteContainer from "./components/QuoteContainer";

import ImageTextOverlay from "./components2/ImageTextOverlay";
import Overlay from "./components2/Overlay";
const theme = {
  font: "Calibri",
};

export default () => (
  <ThemeProvider theme={theme}>
    <ImageTextOverlay>
      <p
        style={{
          display: "table-cell",
          position: "relative",
          zIndex: 2,
          padding: "15px 20px 15px 20px",
        }}
      >
        <HeaderText>Hello</HeaderText>
        <HeaderText>Hello</HeaderText>
      </p>
      <Overlay />
    </ImageTextOverlay>
  </ThemeProvider>
);
