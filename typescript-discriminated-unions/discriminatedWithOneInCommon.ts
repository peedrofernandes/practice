type ThemeSpecs = {
  main: {
    primary: string;
    contrast: string;
  };
  color: {
    primary: string;
    contrast: string;
  }
}

type Theme = {
  light: ThemeSpecs
  dark: ThemeSpecs
  setTheme: () => void
}

const theme: Theme = {
  light: {
    main: {
      primary: "#ffffff",
      contrast: "#111414",
    },
    color: {
      primary: "#ea6f1c",
      contrast: "#ffffff"
    },
  },
  dark: {
    main: {
      primary: "#111414",
      contrast: "#ffffff",
    },
    color: {
      primary: "#111414",
      contrast: "#ea6f1c",
    },
  }
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