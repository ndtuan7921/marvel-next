const typography = {
  MuiTypography: {
    styleOverrides: {
      root: {},
    },
    variants: [
      {
        props: {
          variant: "h1",
        },
        style: {
          fontSize: "4.5rem",
          lineHeight: "5.625rem",
        },
      },
      {
        props: {
          variant: "h2",
        },
        style: {
          fontSize: "3.75rem",
          lineHeight: "4.5rem",
        },
      },
      {
        props: {
          variant: "h3",
        },
        style: {
          fontSize: "3rem",
          lineHeight: "3.75rem",
        },
      },
      {
        props: {
          variant: "h4",
        },
        style: {
          fontSize: "2.25rem",
          lineHeight: "2.75rem",
        },
      },
      {
        props: {
          variant: "h5",
        },
        style: {
          fontSize: "1.875rem",
          lineHeight: "2.375rem",
        },
      },
      {
        props: {
          variant: "h6",
        },
        style: {
          fontSize: "1.5rem",
          lineHeight: "2rem",
        },
      },
    ],
  },
};

export default typography;
