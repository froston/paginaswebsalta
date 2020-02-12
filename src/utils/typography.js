import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Inconsolata", "monospace"],
  bodyFontFamily: ["Inconsolata", "monospace"],
  headerColor: '#f8f8f0',
  bodyColor: "#f8f8f0",
  headerLineHeight: 1.5
})

// Insert styles directly into the <head>
typography.injectStyles();

export default typography;