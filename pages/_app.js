import '../styles/globals.css'
import {ThemeProvider} from "@emotion/react";
import Navigation from "../components/Objects/Navigation";
import {Controller, Scene} from "react-scrollmagic";
import {useState} from "react";

const theme = {
  colors: {
    primary: '#DA22FF',
    primaryHovered: '#C819FF',
    white: '#FFFFFF',
    background: '#000822',
    backgroundHovered: '#01081c',
    text: '#B2B2B2'
  }
}


function MyApp({ Component, pageProps }) {

  // const [pageProgress, setPageProgress] = useState(0);
  return <ThemeProvider theme={theme}>

    <Controller>
      <Scene duration={300}>
        {(progress) =>
            <>
              <Navigation scrollProgress={progress}/>
              <Component {...pageProps} />
            </>
        }


      </Scene>
    </Controller>

  </ThemeProvider>
}

export default MyApp
