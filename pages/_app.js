import '../styles/globals.css'
import {ThemeProvider} from "@emotion/react";
import Navigation from "../components/Objects/Navigation";

const theme = {
  colors: {
    primary: '#DA22FF',
    primaryHovered: '#C819FF',
    white: '#FFFFFF',
    background: '#000822',
    text: '#B2B2B2'
  }
}


function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Navigation/>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
