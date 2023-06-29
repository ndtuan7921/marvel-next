const card = {
  MuiCardContent: {
    styleOverrides: {
      root: {
        background: "transparent",
        boxShadow: "none",
        minHeight: 126,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        maxWidth: 216,
        maxHeight: 480,
      },
    },
  },
};

export default card;
