import { styled } from "@stitches/react";

export const SearchFormContainer = styled("form", {
  display: "flex",
  gap: "1rem",

  input: {
    flex: 1,
    borderRadius: 6,
    border: 0,
    background: "$gray900",
    color: "$gray300",
    padding: "1rem",

    "&:placeholder": {
      color: "$gray500",
    },

    "&:hover": {
      border: "1px solid",
      borderColor: "$green700",
    },

    "&:focus": {
      border: "1px solid",
      borderColor: "$green300",
    },
  },

  button: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",

    padding: "1rem",
    background: "transparent",
    border: "1px solid",
    borderColor: "$green300",
    color: "$green300",
    fontWeight: "bold",
    borderRadius: 6,

    "&:hover": {
      background: "$green500",
      borderColor: "$green500",
      color: "white",

      transition: "0.2s",
    },
  },
});
