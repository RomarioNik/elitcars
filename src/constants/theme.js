const lightTheme = {
  primary: "#121417", //titles
  secondary: "#3470FF", // blue
  features: "rgba(18, 20, 23, 0.50)", // car features
  stroke: "rgba(18, 20, 23, 0.10)", // divider features
  conditions: "#363535", // conditions in modal
  filters: "#8A8A89", // filters names
  select: "rgba(18, 20, 23, 0.20)", // dropdown list
  btnText: "#fff", // button text
  bg: "#fff", // fon
  filtersBg: "#F7F7FB",
  filtersShadow: "rgba(0, 0, 0, 0.02)",
  filtersBorder: "rgba(18, 20, 23, 0.05)",
  filtersMileageBorder: "rgba(138, 138, 137, 0.20)",
  buttonBg: "#3470FF",
  conditionsBg: "#F9F9F9", // in modal window
  closeIconStroke: "#121417", // in modal window
};

const darktheme = {
  primary: "#fff",
  secondary: "#3470FF",
  features: "rgba(255, 255, 255, 0.50)",
  stroke: "rgba(255, 255, 255, 0.30)",
  conditions: "#363535", // conditions in modal
  filters: "#8A8A89", // filters names
  select: "rgba(18, 20, 23, 0.20)", // dropdown list
  btnText: "#fff",
  bg: "#121417",
  filtersBg: "#F7F7FB",
  filtersShadow: "rgba(255, 255, 255, 0.02)",
  filtersBorder: "rgba(18, 20, 23, 0.05)",
  filtersMileageBorder: "rgba(138, 138, 137, 0.20)",
  buttonBg: "#3470FF",
  conditionsBg: "#F9F9F9",
  closeIconStroke: "#F9F9F9",
};

const defaultTheme = {
  font: {
    primary: "Manrope, sans-serif",
    secondary: "Montserrat, sans-serif",
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
  },
  borderRadius: {
    small: "12px",
    medium: "14px",
    large: "24px",
    xxl: "35px",
  },
};

const theme = {
  light: {
    color: lightTheme,
    ...defaultTheme,
  },
  dark: {
    color: darktheme,
    ...defaultTheme,
  },
};

export default theme;
