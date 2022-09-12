import { styled } from "@stitches/react";

export const TransactionContainer = styled("section", {
  bwidth: "100%",
  maxWidth: "1120px",
  margin: "0 auto",
  padding: "0 1.5rem",
  marginTop: "1.5rem",
});

export const TransactionTable = styled("table", {
  width: "100%",
  borderCollapse: "separate",
  borderSpacing: "0 0.5rem",

  td: {
    padding: "1.25rem 2rem",
    background: "$gray700",
    "&:first-child": {
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 6,
    },
    "&:last-child": {
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6,
    },
  },
});

export const PriceHighlight = styled("span", {
  variants: {
    color: {
      income: { color: "$green700" },
      outcome: { color: "$red700" },
    },
  },
});
