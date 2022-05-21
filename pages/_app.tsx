import "../styles/globals.css";
import Container from "@mui/material/Container";
import type { AppProps } from "next/app";


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
};

export default MyApp;
