import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import darkTheme from "@theme/darkTheme";
import lightTheme from "@theme/lightTheme";
import Header from "@components/Navbar";
import Layout from "Layout/Layout";
import Map from "./Dashboard/Map";
import Styles from "@styles/Home.module.scss";

const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const Home = () => {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const darkThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...darkTheme,
      }),
    [mode]
  );
  const lightThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...lightTheme,
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider
        theme={mode === "dark" ? darkThemeChosen : lightThemeChosen}
      >
        <CssBaseline />
        <Header ColorModeContext={ColorModeContext} />
        <Layout></Layout>
        <main className={Styles.main}>
          <Map />
        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default Home;
