type Theme = ({
  type: "light";
  main: {
    primary: "#ffffff";
    contrast: "#111414";
  };
  color: {
    primary: "#ea6f1c";
    contrast: "#ffffff"
  }
} | {
  type: "dark";
  main: {
    primary: "#111414";
    contrast: "#ffffff";
  },
  color: {
    primary: "#111414";
    contrast: "#ea6f1c";
  }
}) & {
  setTheme: () => void
}

const lightTheme: Theme = {
  type: "light",
  main: {
    primary: "#ffffff",
    contrast: "#111414",
  },
  color: {
    primary: "#ea6f1c",
    contrast: "#ffffff"
  },
  setTheme: () => console.log("Worked!")
}

const darkTheme: Theme = {
  type: "dark",
  main: {
    primary: "#111414",
    contrast: "#ffffff",
  },
  color: {
    primary: "#111414",
    contrast: "#ea6f1c",
  },
  setTheme: () => console.log("Worked!")
}