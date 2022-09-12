import { styled } from "@stitches/react";

export const HeaderContainer = styled("header", {
  background: "$gray900",
  padding: "2.5rem 0 7.5rem",
});

export const HeaderContent = styled("div", {
  width: "100%",
  maxWidth: "1120px",
  margin: "0 auto",
  padding: "0 1.5rem",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Button = styled("button", {
  height: 50,
  border: 0,

  background: "$green500",
  fontSize: 18,
  color: "$white",
  fontWeight: "bold",
  padding: "0 1.25rem",
  borderRadius: 6,
  cursor: "pointer",

  transition: "0.2s",
  "&:hover": {
    background: "$green700",
  },
});
